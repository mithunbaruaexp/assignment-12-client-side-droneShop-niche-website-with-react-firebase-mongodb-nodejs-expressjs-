import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container className="my-5">
        <Row>
          <Col sm={8} className="d-flex align-items-start flex-column ">
            <img
              className=""
              src="https://i.ibb.co/44vXvNm/logo-black-footer.png"
              alt=""
            />
            <p className="text-start">
              Objectively innovate empowered manufactured products whereas
              parallel platforms. Holisticly predominate extensible testing.
              Objectively innovate empowered manufactured products whereas
              parallel platforms. Holisticly predominate testing.
            </p>
          </Col>
          <Col sm={4}>
            <img
              className="img-fluid"
              src="https://i.ibb.co/56SDKMm/inner-product-02-640x385.png"
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <h5>CATEGORIES</h5>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Service</li>
              <li>News</li>
            </ul>
          </Col>
          <Col sm>
            {" "}
            <h5>INFORMATION</h5>
            <ul>
              <li>Portfolio</li>
              <li>Shop</li>
              <li>Contact</li>
              <li> Location</li>
            </ul>
          </Col>
          <Col sm>
            <h5>Important Links</h5>
            <ul>
              <li>
                <i className="fab fa-facebook"></i>
              </li>
              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul>
          </Col>
          <Col sm>
            {" "}
            <h5>SUBSCRIBE NOW</h5>
            <div className=" bottom-subscribe">
              <input type="email" placeholder="your email" />
              <button>
                <i className="fas fa-arrow-right"></i>{" "}
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <h6 className="text-center bottom-text">All rights are reserved</h6>
    </div>
  );
};

export default Footer;
