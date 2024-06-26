import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import BookingForm from "../components/UI/BookingForm";
import Spinner from "../components/UI/Loading"; // Assuming you have a Spinner component

const CarRentDetails = () => {
  const { slug } = useParams();
  const [vehicleData, setVehicleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/vehicles/public/${slug}`
        );
        setVehicleData(response.data);
        console.log("img : ", response.data.albumUrls[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const renderVehicleDetails = (icon, value) => (
    <span className="d-flex align-items-center gap-1 section__description">
      <i className={icon} style={{ color: "#f9a826" }}></i> {value}
    </span>
  );

  if (loading) {
    return <Spinner />; // Display a loading spinner or message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message
  }

  return (
    <Helmet title={vehicleData.brand}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              {vehicleData.albumUrls && vehicleData.albumUrls.length > 0 && (
                <img
                  src={vehicleData.albumUrls[0]}
                  alt="vehicle"
                  className="w-100"
                />
              )}
            </Col>
            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">
                  {vehicleData.brand} {vehicleData.model}
                </h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    Rs:{vehicleData.fuelType}.00 / Day
                  </h6>
                </div>

                <p className="section__description">
                  gubergren vero gubergren dolor. At diam. Dolor labore lorem no
                  accusam sit justo sadipscing labore invidunt voluptua, amet duo
                  et gubergren vero gubergren dolor. At diam.
                </p>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  {renderVehicleDetails("ri-roadster-line", vehicleData.model)}
                  {renderVehicleDetails(
                    "ri-settings-2-line",
                    vehicleData.fuelType
                  )}
                  {renderVehicleDetails(
                    "ri-timer-flash-line",
                    `${vehicleData.fuelType} cc`
                  )}
                </div>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  {renderVehicleDetails(
                    "ri-map-pin-line",
                    vehicleData.fuelType
                  )}
                  {renderVehicleDetails(
                    "ri-wheelchair-line",
                    vehicleData.fuelType
                  )}
                  {renderVehicleDetails("ri-building-2-line", vehicleData.style)}
                </div>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  {renderVehicleDetails("ri-user-line", vehicleData.fuelType)}
                </div>
              </div>
            </Col>

            <Col lg="12" className="mt-3 lg:mx-10">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm slug={slug} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarRentDetails;
