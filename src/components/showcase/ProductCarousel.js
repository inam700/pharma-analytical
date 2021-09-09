import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./showcase.css";
import digitalPhMeter from "../../resources/images/showcase/digital-ph-meter-removebg-preview.png";
import dataLogger from "../../resources/images/showcase/elitech-gsp-6-temperature-and-humidity-data-logger-removebg-preview.png";
import karlFischer from "../../resources/images/showcase/karl-fischer-titrator-removebg-preview.png";
const ProductCarousel = () => {
  const items = [
    {
      id: 1,
      name: "Digital pH/ORP Meter",
      code: "HI2002-01",
      image: digitalPhMeter,
    },
    {
      id: 2,
      name: "Temperature and Humidity Data Logger",
      code: "GSP-6",
      image: dataLogger,
    },
    { id: 3, name: "Karl Fischer Titrator", code: "HI904", image: karlFischer },
  ];
  const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    animateOut: "fadeOut",
  };

  return (
    <>
      <div className="showcase pt-3">
        <div className="container">
          <OwlCarousel options={options}>
            {items.map((item) => {
              return (
                <Row>
                  <Col className="my-auto" lg={6}>
                    <div className="left-section">
                      <h1>{item.name}</h1>
                      <p className="m-0">{item.code}</p>
                      <Button variant="outline-success" className="mt-4 px-4">
                        Get in Touch
                      </Button>
                    </div>
                  </Col>
                  <Col className="my-auto" lg={6}>
                    <div className="right-section">
                      <img src={item.image} />
                    </div>
                  </Col>
                </Row>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
