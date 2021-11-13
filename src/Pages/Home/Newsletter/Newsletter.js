import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <Container>
        <Row>
          <Col>
            <div className="main">
              <p>MithunXp Drone service</p>
              <p>Subscribe To Our Weekly Newsletter</p>
              <p>Want to take amazing videos and photos? Check our tips!</p>
              <button className="newsletter-btn">subscribe now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
