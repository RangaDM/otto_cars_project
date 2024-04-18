import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/about1.png";
import miniImg from "../../assets/all-images/cars-img/mini.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Marketplace</h2>
              <p className="section__description">
                Welcome to our marketplace! We're delighted to have you here.
                Our platform offers a wide range of high-quality products at
                unbeatable prices. Our dedicated team is committed to ensuring a
                smooth and enjoyable shopping experience for you. We constantly
                update our product catalogue to bring you the best products.
                Your satisfaction is our top priority. Explore our marketplace,
                discover amazing products, and enjoy your shopping. Thank you
                for choosing us!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Wide Selection of
                  Products
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Quality Assurance
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Competitive Pricing
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Excellent Customer
                  Service
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img about__secc-img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={miniImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__section-content">
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
                Welcome to our car rental service! We're committed to providing
                you with a seamless car rental experience. Our fleet features a
                diverse selection of high-quality vehicles to suit all your
                travel needs. Whether you're looking for a compact car for city
                driving, a comfortable sedan for family trips, or a spacious van
                for group travel, we've got you covered. We pride ourselves on
                our competitive pricing, excellent customer service, and
                flexible rental terms. Explore our range, find the perfect
                vehicle, and start your journey with us. Thank you for choosing
                our service!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Diverse Selection
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Competitive Pricing
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Excellent Customer
                  Service
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Flexible Rental Terms
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
