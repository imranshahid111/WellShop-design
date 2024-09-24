import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/App.css"

const Banner = () => {
  return (
    <section style={{backgroundColor:"#f6f6f6", padding : "1px"}}>
    <Container className="mt-5">
    <Row>
      
      <Col md={6}>
        <img
          src="/src/images/slider-ezgif.com-webp-to-jpg-converter.jpg"
          alt="Import Amazon Products"
          className="img-fluid"
        />
      </Col>

      
      <Col md={6}>
        <h2>How Wellshop Import Amazon Products In Pakistan?</h2>
        <p>
          This question can be twerk like how can you buy amazon items or
          product from amazon USA in pakistan. Wellshop is just like an amazon
          store in pakistan. We are like the bridge between amazon shipping to
          pakistan. First of all, you need to go to the website of amazon.
          Select your product and contact us through WhatsApp support. OR you
          can directly call us, or you can visit our outlet in Lahore. We can
          import your desired product from amazon.
        </p>
        <p>
          Wellshop makes it easy to buy things from Amazon, eBay, or any other
          store in the US and have them sent right to your door in Pakistan.
          You no longer have to deal with complicated foreign shipping or
          stress over how to get your favorite things from anywhere in the
          world. It is easy with Wellshop.
        </p>
       
      </Col>
    </Row>
  </Container>
  </section>
  )
}

export default Banner