import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import Mainsection from "../components/UI/Mainsection";
import axios from "axios";
import FinanceCal from "../components/UI/FinanceCal";

const Home = () => {
  const [carData, setcarData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const vehicle = await axios.get(
          "http://localhost:5000/api/v1/vehicles/retrieveAllVehicles"
        );
        setcarData(vehicle.data.car);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Where do you need to visit?</h2>
                </div>
              </Col>

              <Col
                md="2"
                lg="8"
                className="items-center justify-center lg:flex"
              >
                {/* <FindCarForm /> */}
                <Mainsection />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 3).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
          {carData.length > 3 && (
            <Row className="text-center">
              {/* <a href="#">
              <h5 className="font-semibold">See more</h5>
              </a> */}
              <a href="/cars">
                <h5 className="font-semibold">See more</h5>
              </a>
            </Row>
          )}
        </Container>
      </section>

      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== Finance cal ============ */}
      <div className="fina">
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Calculate your monthly finance payments</h6>
              <h2 className="section__title">Finance Calculator</h2>
            </Col>

            <FinanceCal />
          </Row>
        </Container>
      </div>

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Home;
