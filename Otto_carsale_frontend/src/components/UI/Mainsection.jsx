import React from 'react'
import "../../styles/mainbutton.css";

const Mainsection = () => {
  return (
    <div className="car__item-info d-flex align-items-center gap-2 justify-content-between m-3">
        <button className="car__item-btn car__btn-rent w-50">
        <h1 className="text-light m-4">Vehicle Marketplace</h1>
            {/* <Link to={`/cars/${carName}`}>Rent</Link> */}
          </button>

          <button className="car__item-btn2 car__btn-rent w-50">
          <h1 className="text-light m-4">Rental Service</h1>
            {/* <Link to={`/cars/${carName}`}>Details</Link> */}
          </button>
    </div>
  )
}

export default Mainsection