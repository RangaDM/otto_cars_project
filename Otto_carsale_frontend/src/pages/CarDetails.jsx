import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Helmet from "../components/Helmet/Helmet";

const CarDetails = () => {
  const { slug } = useParams();
  const [vanData, setVanData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleCarItem = await axios.get(`http://localhost:5000/api/v1/vehicles/findOneVehicle/${slug}`);
        setVanData(singleCarItem.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [vanData]);
  
  const firstAlbumUrl = Array.isArray(vanData.album) && vanData.album.length > 0 ? vanData.album[0].photoURL : null;

  return (
    <Helmet title={vanData.brand}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={firstAlbumUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{vanData.carName}</h2>
                <p className="section__description">{vanData.vehicleState}</p>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i> {vanData.model}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i> {vanData.style}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i> {vanData.condition}
                  </span>
                </div>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i> {vanData.fuelType}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i> {vanData.color}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i> {vanData.brand}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Suggestions for you
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default CarDetails;
