import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";

const CarDetails = () => {
  const { slug } = useParams();
  const [vehicleData, setVehicleData] = useState({});
  const [relatedData, setRelatedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleCarItem = await axios.get(`http://localhost:5000/api/v1/vehicles/findOneVehicle/${slug}`);
        setVehicleData(singleCarItem.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehicleDataToSend = {
          fuelType: vehicleData.fuelType,
          vehicleType: vehicleData.vehicleType,
          seatingCapacity: vehicleData.seatingCapacity,
        };

        const response = await axios.post("http://localhost:5000/api/v1/vehicles/similarVehicles", vehicleDataToSend);
        setRelatedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (vehicleData.fuelType && vehicleData.vehicleType && vehicleData.seatingCapacity) {
      fetchData();
    }
  }, [vehicleData]);

  const firstAlbumUrl = vehicleData.album?.[0]?.photoURL;

  return (
    <Helmet title={vehicleData.brand}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={firstAlbumUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">
                  {vehicleData.brand} - {vehicleData.model}
                </h2>
                <p className="section__description">
                  {vehicleData.vehicleState}
                </p>

                <div className="grid grid-cols-3 align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  {/* Render vehicle details */}
                </div>

                <h4 className="section__title2 mt-4">
                  Price : {vehicleData.vehiclePrice}
                </h4>
                <button className="w-25 mt-3 car__item-btn car__btn-rent">
                  <Link to={`/contact`}>Contact</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Suggestions for you
                </span>
              </div>
            </Col>
            {relatedData.slice(0, 3).map((item, index) => (
              <CarItem item={item} key={index} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
