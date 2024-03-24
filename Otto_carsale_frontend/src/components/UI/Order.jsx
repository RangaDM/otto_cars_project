import React from 'react'
import { Col } from 'reactstrap';

const Order = (props) => {

    const { model, name, fuelType, manufacturedCountry, status } = props.order;
  
    return (
      <Col lg="4" md="4" sm="6" className="mb-5">
        <div className="car__item">
  
          <div className="car__item-content mt-4">
            <h4 className="section__title text-center">{name}</h4>
  
            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
              <span className=" d-flex align-items-center gap-1">
                <i class="ri-car-line"></i> {model}
              </span>
              <span className=" d-flex align-items-center gap-1">
                <i class="ri-settings-2-line"></i> {fuelType}
              </span>
              <span className=" d-flex align-items-center gap-1">
                <i class="ri-timer-flash-line"></i> {manufacturedCountry}
              </span>
              <span className=" d-flex align-items-center gap-1">
                <i class="ri-settings-2-line"></i> {status}
              </span>
            </div>
          </div>
        </div>
      </Col>
    );
}

export default Order