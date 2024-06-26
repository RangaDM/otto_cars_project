import React from "react";
import { Col } from "reactstrap";
import "../../styles/order.css";

const Order = (props) => {
  const { description, distance, noOfLuggages, orderId, noOfPassengers, orderFee, orderStatus, paymentStatus, pickupTime, rentalDates, destination, vehicles } = props.order;

  // Function to truncate _id if it's longer than 15 characters
  // const truncatedId = orderId.length > 15 ? orderId.substring(0, 15) + "..." : orderId;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__item-content mt-4">
          <h5 className="topics__title2 text-center">{}</h5>
          <div className="order__item-info mt-3 mb-4">
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-user-line"></i> Order number : {orderId}
            </span>
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-roadster-line"></i> Distance : {distance} km
            </span>
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-user-line"></i> Passengers : {noOfPassengers}
            </span>
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-user-line"></i> Luggages : {noOfLuggages}
            </span>
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-user-line"></i> Pickup time : {pickupTime}
            </span>
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-user-line"></i> Rental dates : {rentalDates}
            </span>
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-user-line"></i> Destination : {orderStatus}
            </span>
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-user-line"></i> Order fee : {paymentStatus}
            </span>
            <span className=" d-flex align-items-center gap-2 mb-1">
              <i className="ri-user-line"></i> Vehicle brand : {vehicles.brand}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Order;
