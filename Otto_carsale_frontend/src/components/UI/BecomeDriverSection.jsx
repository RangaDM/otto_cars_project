import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import saleImg from "../../assets/all-images/sale.png";
// import { NavLink } from "react-router-dom";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={saleImg} alt="" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do you want to sale your car?
            </h2>
            <bbr />
            <h5 className="text-white text-justify">
              Lets us help you to sell your car. We have a large customer base
              that is looking for vehicles like yours. We will help you to
              connect with them.
            </h5>
            <a href="/contact">
              <button className="btn mt-4">
                Contact Us
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
