import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
import { products } from "../../resources/data/products";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import ProductCarousel from "../showcase/ProductCarousel";
import CompanyDetails from "../showcase/CompanyDetails";
const ProductList = () => {
  return (
    <>
      <div className="hero-section">
        <ProductCarousel />
      </div>
      <CompanyDetails />
      <div>
        <Container>
          <Row>
            {products.map((item) => {
              return (
                <Col lg={3} key={item.id}>
                  <Card className="p-3 mt-3">
                    <Card.Img
                      style={{ width: "220px", height: "220px" }}
                      variant="top"
                      src={item.productImage}
                    />
                    <Card.Title className="mt-3">{item.productName}</Card.Title>
                    <Link to={`/product-details/${item.id}`} className="mt-3">
                      <Button variant="outline-primary">See Details</Button>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductList;
