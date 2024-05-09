import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";

const CarRentDetails = () => {
  const { slug } = useParams();
  const [vehicleData, setVehicleData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/vehicles/findOneVehicle/${slug}`
        );
        setVehicleData(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [slug]);

  const renderVehicleDetails = (icon, value) => (
    <span className="d-flex align-items-center gap-1 section__description">
      <i className={icon} style={{ color: "#f9a826" }}></i> {value}
    </span>
  );

  return (
    <Helmet title={vehicleData.brand}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={vehicleData.album?.[0]?.photoURL} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{vehicleData.brand} {vehicleData.model}</h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    Rs:{vehicleData.fuelType}.00 / Day
                  </h6>
                </div>

                <p className="section__description">
                  gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.
                </p>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  {renderVehicleDetails("ri-roadster-line", vehicleData.model)}
                  {renderVehicleDetails("ri-settings-2-line", vehicleData.fuelType)}
                  {renderVehicleDetails("ri-timer-flash-line", `${vehicleData.fuelType} cc`)}
                </div>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  {renderVehicleDetails("ri-map-pin-line", vehicleData.fuelType)}
                  {renderVehicleDetails("ri-wheelchair-line", vehicleData.fuelType)}
                  {renderVehicleDetails("ri-building-2-line", vehicleData.style)}
                </div>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  {renderVehicleDetails("ri-user-line", vehicleData.fuelType)}
                </div>
              </div>
            </Col>

            <Col lg="12" className="mt-3 lg:mx-10">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarRentDetails;