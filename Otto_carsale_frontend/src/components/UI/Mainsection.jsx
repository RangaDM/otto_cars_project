import React from 'react'
import "../../styles/mainbutton.css";

const Mainsection = () => {
  return (
    <div className="items-center flex justify-center gap-2 m-3">
        <button className="car__item-btnx w-50 h-44">
        <h1 className="text-light m-1 font-semibold">Vehicle Marketplace</h1>
            {/* <Link to={`/cars/${carName}`}>Rent</Link> */}
          </button>

          <button className="car__item-btn2 w-50 h-44">
          <h1 className="text-light m-1 font-semibold">Rental Service</h1>
            {/* <Link to={`/cars/${carName}`}>Details</Link> */}
          </button>
    </div>
  )
}

export default Mainsection