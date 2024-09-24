import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const GridTemp = () => {
  return (
    <section>
        <Container className="my-3">
      <Row>
        <Col lg={8} md={12} sm={12} className="mb-3">
          <Image  src="\src\images\wellshopbanner1-ezgif.com-webp-to-jpg-converter.jpg" fluid alt="Healthcare Products" />
        </Col>
        
       
        <Col lg={4} md={12} sm={12}>
          <div className="mb-4 p-0 d-flex">
            <Image src="\src\images\w-ezgif.com-webp-to-jpg-converter.jpg" className='img' fluid alt="Makeup Products" />
          </div>
          <div className='d-flex'>
            <Image src="\src\images\wpad-ezgif.com-webp-to-jpg-converter.jpg" className='img' fluid alt="Electronics Products" />
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default GridTemp