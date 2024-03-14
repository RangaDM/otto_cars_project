import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="All Vehicle Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>
            <section className="border-y-2 border-slate-200">
              <Container>
                <Row>
                  <Col lg="12" className="mb-3">
                    <h2 className="font-semibold">Cars</h2>
                  </Col>
                  {carData.map((item) => (
                    <CarItem item={item} key={item.id} />
                  ))}
                </Row>
              </Container>
            </section>
            <section className="border-y-2 border-slate-200">
              <Container>
                <Row>
                  <Col lg="12" className="mb-3">
                    <h2 className="font-semibold">Vans</h2>
                  </Col>
                  {carData.map((item) => (
                    <CarItem item={item} key={item.id} />
                  ))}
                </Row>
              </Container>
            </section>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
