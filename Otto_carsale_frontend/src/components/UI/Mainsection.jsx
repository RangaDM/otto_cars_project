import React from 'react'
import "../../styles/car-item.css";

const Mainsection = () => {
  return (
    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
        <button className=" w-50 car__item-btn car__btn-rent">
        <h1 className="text-light m-4">Vehicle Marketplace</h1>
            {/* <Link to={`/cars/${carName}`}>Rent</Link> */}
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
          <h1 className="text-light m-4">Rental Service</h1>
            {/* <Link to={`/cars/${carName}`}>Details</Link> */}
          </button>
    </div>
  )
}

export default Mainsection