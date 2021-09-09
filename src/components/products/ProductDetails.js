import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { products } from "../../resources/data/products";
import "./products.css";

class ProductDetails extends Component {
  state = {
    singleProduct: {},
  };
  componentDidMount() {
    products.filter((item) => {
      return (
        item.id === +this.props.match.params.id &&
        this.setState({
          singleProduct: item,
        })
      );
    });
  }
  render() {
    let { singleProduct } = this.state;
    return (
      <div className="product-details">
        <Container>
          <h1 className="text-center heading-details">Product Details</h1>
          <Row>
            <Col lg={6}>
              <Card className="p-4">
                <Card.Img src={singleProduct.productImage} variant="top" />
              </Card>
            </Col>
            <Col lg={6}>
              <h2 className="product-name">{singleProduct.productName}</h2>
              <h5 className="mt-4">
                <b>Product Code: </b> {singleProduct.productCode}
              </h5>
              <h5 className="mt-4">
                <b>Description:</b>
              </h5>
              <p>{singleProduct.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductDetails;
