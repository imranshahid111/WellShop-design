import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import '/src/App.css';

const products = [
  { id: 1, title: "Product 1", text: "Quercetin Gummies with Vitamin C...", imgSrc: "https://via.placeholder.com/150" },
  { id: 2, title: "Product 2", text: "Sciatica Supplement...", imgSrc: "https://via.placeholder.com/150" },
  { id: 3, title: "Product 3", text: "NICU Soothie Pacifier...", imgSrc: "https://via.placeholder.com/150" },
  { id: 4, title: "Product 4", text: "L-Serine Powder...", imgSrc: "https://via.placeholder.com/150" },
  { id: 5, title: "Product 5", text: "More details about product 5...", imgSrc: "https://via.placeholder.com/150" },
  { id: 6, title: "Product 6", text: "More details about product 6...", imgSrc: "https://via.placeholder.com/150" },
  { id: 7, title: "Product 7", text: "More details about product 7...", imgSrc: "https://via.placeholder.com/150" },
];

const MultiItemCarousel = () => {
  const isBelowMd = useMediaQuery({ query: '(max-width: 768px)' });
  const chunkSize = isBelowMd ? 2 : 4;

  
  const productChunks = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    productChunks.push(products.slice(i, i + chunkSize));
  }

 
  const lastChunk = productChunks[productChunks.length - 1];
  if (lastChunk.length < chunkSize) {
    const itemsToClone = chunkSize - lastChunk.length;
    for (let i = 0; i < itemsToClone; i++) {
      lastChunk.push(products[i]);
    }
  }

  return (
    <Container className="">
    <Carousel indicators={false}>
    {productChunks.map((chunk, index) => (
        <Carousel.Item key={index} className='ccard'>
            <Row>
                {chunk.map(product => (
                    <Col key={product.id} xs={6} md={3} style={{paddingTop:"20px", paddingBottom:"20px"}}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={product.imgSrc} alt={product.title} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Carousel.Item>
    ))}
</Carousel>
       </Container>
  );
};

export default MultiItemCarousel;
