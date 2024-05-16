import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";

const CarDetails = () => {
  const { slug } = useParams();
  const [vehicleData, setVehicleData] = useState({});
  const [relatedData, setRelatedData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const singleCarItem = await axios.get(
          `http://100.27.232.65:3001/api/v1/vehicles/findOneVehicle/${slug}`
        );
        setVehicleData(singleCarItem.data[0]);
        // console.log(singleCarItem.data[0]);
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

        const response = await axios.post(
          "http://100.27.232.65:3001/api/v1/vehicles/similarVehicles",
          vehicleDataToSend
        );
        setRelatedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (
      vehicleData.fuelType &&
      vehicleData.vehicleType &&
      vehicleData.seatingCapacity
    ) {
      fetchData();
    }
  }, [vehicleData]);

  // const firstAlbumUrl = vehicleData.album?.[0]?.photoURL;
  // console.log(firstAlbumUrl);

  return (
    <Helmet title={vehicleData.brand}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {vehicleData.album?.map((item, index) => (
                  <div key={index}>
                    <img src={item.photoURL} alt="" className="w-100" />
                  </div>
                ))}
              </Slider>
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">
                  {vehicleData.brand} - {vehicleData.model}
                </h2>
                <div className="about__section-item car__item-info d-flex align-items-center">
                  <span className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    {vehicleData.model}
                  </span>
                  <span className=" d-flex align-items-center gap-2">
                    <i className="ri-building-line"></i>
                    {vehicleData.companyName}
                  </span>
                  <span className=" d-flex align-items-center gap-2">
                    <i className="ri-map-pin-line"></i>
                    {vehicleData.manufacturedCountry}
                  </span>
                </div>
                <div className="about__section-item car__item-info d-flex align-items-center mt-3">
                  <span className=" d-flex align-items-center gap-2">
                    <i className="ri-paint-fill"></i>
                    {vehicleData.color}
                  </span>
                  <span className=" d-flex align-items-center gap-2">
                    <i class="ri-settings-2-line"></i>
                    {vehicleData.fuelType}
                  </span>
                  <span className=" d-flex align-items-center gap-2">
                    <i className="ri-calendar-line"></i>
                    {vehicleData.manufacturedYear}
                  </span>
                </div>
                <div className="about__section-item car__item-info d-flex align-items-center mt-3">
                  <span className=" d-flex align-items-center gap-2">
                    <i className="ri-group-line"></i>
                    {vehicleData.seatingCapacity}
                  </span>
                  <span className=" d-flex align-items-center gap-2">
                    <i className="ri-brush-line"></i>
                    {vehicleData.style}
                  </span>
                  <span className=" d-flex align-items-center gap-2">
                    <i className="ri-grid-line"></i>
                    {vehicleData.vehicleType}
                  </span>
                </div>

                <div
                  className="grid grid-cols-3 align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
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
