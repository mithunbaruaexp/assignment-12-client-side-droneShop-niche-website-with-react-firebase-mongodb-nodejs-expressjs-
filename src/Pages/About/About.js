import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCumbs from "../BreadCumbs/BreadCumbs";
import Footer from "../Home/Shared/Footer/Footer";
import Header from "../Home/Shared/Header/Header";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header></Header>
      <BreadCumbs explore={"About us"}></BreadCumbs>
      <Container>
        <Row>
          <Col>
            <div className="first-container">
              <h2>About Squa-Drone</h2>
              <p>
                Launched in 1999, Squa-Drone is the leading platform for global
                wholesale trade. We serve millions of buyers and suppliers
                around the world.
              </p>
            </div>
          </Col>
          <Col>
            <div className="second-container">
              <img
                src="https://i.ibb.co/DV2yBMR/H3642cb6ab701463d94fe2ab7bbf64448-G-1.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <img
              className="about-1-img"
              src="https://i.ibb.co/wSbQDQ0/H1b61c3dcb7644a2ba754017edcfcacf6-U.jpg"
              alt=""
            />
          </Col>
          <Col>
            <div className="mission-container">
              <h2>Our Mission</h2>
              <p>
                As part of the MithunXp Group, our mission is to make it easy to
                do business anywhere. We do this by giving suppliers the tools
                necessary to reach a global audience for their products, and by
                helping buyers find products and suppliers quickly and
                efficiently.
              </p>
              <h2>One-Stop Sourcing</h2>
              <p>
                Squa-drone brings you hundreds of millions of products in over
                40 different major categories, including consumer electronics,
                machinery and apparel. Buyers for these products are located in
                190+ countries and regions, and exchange hundreds of thousands
                of messages with suppliers on the platform each day.
              </p>
              <h2>Anytime, Anywhere</h2>
              <p>
                As a platform, we continue to develop services to help
                businesses do more and discover new opportunities.
              </p>
              <p>
                Whether it’s sourcing from your mobile phone or contacting
                suppliers in their local language, turn to squa drone for all
                your global business needs.
              </p>
            </div>
          </Col>
          {/* <Col>3 of 3</Col> */}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default About;
