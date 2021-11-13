import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormLabel,
  Row,
} from "react-bootstrap";
import BreadCumbs from "../BreadCumbs/BreadCumbs";
import Footer from "../Home/Shared/Footer/Footer";
import Header from "../Home/Shared/Header/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-container">
      <Header></Header>
      <BreadCumbs explore={"Contact us"}></BreadCumbs>
      <Container>
        <Row>
          <Col>
            <div className="form-container">
              <Form>
                <h2>How can We help?</h2>
                <Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Message</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Addtional Details</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave Details"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send message
                </Button>
              </Form>
            </div>
          </Col>
          <Col>
            <div className="addvertisment">
              <img
                src="https://i.ibb.co/7pwJxVm/drone-service-flyer-design-template-f8be4647590633b9a3bcfb0c71cb5aae-screen.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
