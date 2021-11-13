import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

//initializing firebase
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  //sign in with google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        //save user to the database
        saveUser(user.email, user.displayName, "PUT");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //register user with email password
  const registerUser = (name, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        //name on the state
        const newUser = { email, displayName: name };
        setUser(newUser);

        //save user to the database
        saveUser(email, name, "POST");

        //firebase display Name
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(() => {});

        history.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //login with email pass
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //admin check
  useEffect(() => {
    const url = `https://serene-anchorage-15140.herokuapp.com/users/${user?.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  //logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };

    fetch("https://serene-anchorage-15140.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    registerUser,
    logout,
    loginUser,
    signInWithGoogle,
    admin,
  };
};
export default useFirebase;
