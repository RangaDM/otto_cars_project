import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarRentItem = (props) => {
  const { album, model, brand, fuelType, manufacturedCountry, vehicleId, _id } =
    props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={album[0].photoURL} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{brand}</h4>
          <h6 className="rent__price text-center mt-">
            Rs:{vehicleId}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            {/* <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span> */}
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {manufacturedCountry}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-user-line"></i> {fuelType}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <button className=" w-50 car__item-btn car__btn-rent">
              <Link to={`/rent/${_id}`}>Rent</Link>
            </button>
            <button className=" w-50 car__item-btn car__btn-details">
              <Link to={`/contact`}>Contact</Link>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarRentItem;
