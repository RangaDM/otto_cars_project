import React from 'react';
import { Col } from 'reactstrap';
import "../../styles/order.css";

const Order = (props) => {
    const { customerAddress, _id, customerName, orderedDate, status } = props.order;

    // Function to truncate _id if it's longer than 15 characters
    const truncatedId = _id.length > 15 ? _id.substring(0, 15) + "..." : _id;

    return (
        <Col lg="4" md="4" sm="6" className="mb-5">
            <div className="car__item">
                <div className="car__item-content mt-4">
                    <h5 className="topics__title2 text-center">{truncatedId}</h5>
                    <div className="order__item-info mt-3 mb-4">
                        <span className=" d-flex align-items-center gap-2 mb-1">
                            <i className="ri-car-line"></i> {customerAddress}
                        </span>
                        <span className=" d-flex align-items-center gap-2 mb-1">
                            <i className="ri-settings-2-line"></i> {customerName}
                        </span>
                        <span className=" d-flex align-items-center gap-2 mb-1">
                            <i className="ri-timer-flash-line"></i> {orderedDate}
                        </span>
                        <span className=" d-flex align-items-center gap-2 mb-1">
                            <i className="ri-settings-2-line"></i> {status}
                        </span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default Order;
