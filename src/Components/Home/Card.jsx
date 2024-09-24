import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '/src/App.css';

const Cards = () => {
  return (
    <>
      <Container className="mb-3 ">
        <Row className="justify-content-center g-3">
          <Col md={3} className="hide" >
            <Card className="ccard mb-3" >
              <Card.Img variant="top" src='/src/images/blog.png' alt="Our Blogs" className="cimg" />
              <Card.Body>
                <Card.Title className="text-center  text-decoration-underline">
                  Our Blogs
                </Card.Title>
                <Card.Text className="text-center">
                  Find out how to import products in Pakistan and also read trending blogs here in our blogs section.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="hide">
            <Card className="ccard mb-3" >
              <Card.Img variant="top" src='/src/images/terms-and-conditions.png' alt="Terms & Conditions" className="cimg"/>
              <Card.Body>
                <Card.Title className="text-center  text-decoration-underline">
                  Terms & Conditions
                </Card.Title>
                <Card.Text className="text-center">
                  Must read our terms and conditions so you can have a good experience in future with us.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3} sm={6}>
            <Card className="ccard mb-3" >
              <Card.Img variant="top" src='/src/images/refund.png' alt="Refund Policy" className="cimg"/>
              <Card.Body>
                <Card.Title className="text-center  text-decoration-underline">
                  Refund Policy
                </Card.Title>
                <Card.Text className="text-center">
                  We provide reliable refund and return policy for satisfying the customer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3} sm={6}>
            <Card className="ccard mb-3" >
              <Card.Img variant="top" src='/src/images/questions.png' alt="Why Choose Us?" className="cimg" />
              <Card.Body>
                <Card.Title className=" text-decoration-underline text-center">
                  Why Choose Us?
                </Card.Title>
                <Card.Text className="text-start">
                  <ul>
                    <li>Fastest Delivery</li>
                    <li>Cash On Delivery</li>
                    <li>Lowest Rates</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
