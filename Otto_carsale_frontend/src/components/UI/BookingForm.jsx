import React, { useState } from "react";
import { Button, Form, FormGroup } from "reactstrap";
import "../../styles/booking-form.css";

const BookingForm = (props) => {
  const {slug} = props;
  console.log(slug);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    destination: "",
    noOfPassengers: "",
    noOfLuggages: "",
    pickupDate: "",
    journeyTime: "",
    description: "",
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    fromAddress,
    destination,
    noOfPassengers,
    noOfLuggages,
    pickupDate,
    journeyTime,
    description,
  } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const userID = localStorage.getItem("userID");
    if (!userID) {
      window.location.href = "/user";
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      firstName:localStorage.getItem("firstName"),
      lastName:localStorage.getItem("lastName"),
      email:localStorage.getItem("email"),
      phoneNumber,
      fromAddress,
      destination,
      noOfPassengers,
      noOfLuggages,
      pickupDate,
      journeyTime,
      description,
      orderStatus: "Pending",
      paymentStatus: "Unpaid",
      userID: localStorage.getItem("userID"),
    });

    try {
      // const response = await axios.post("/api/orders", body, config);
      // console.log(response.data);
      console.log("Booking details :" , body);

      // alert("Order placed successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            name="fromAddress"
            value={fromAddress}
            placeholder="From Address"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            name="destination"
            value={destination}
            placeholder="To Address"
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <select
            name="noOfPassengers"
            id=""
            value={noOfPassengers}
            onChange={handleChange}
            required
          >
            <option value="">Select Passengers</option>
            <option value="1 person">1 Person</option>
            <option value="2 person">2 Person</option>
            <option value="3 person">3 Person</option>
            <option value="4 person">4 Person</option>
            <option value="5+ person">5+ Person</option>
          </select>
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <select
            name="noOfLuggages"
            id=""
            value={noOfLuggages}
            onChange={handleChange}
            required
          >
            <option value="">Select Luggage</option>
            <option value="1 luggage">1 luggage</option>
            <option value="2 luggage">2 luggage</option>
            <option value="3 luggage">3 luggage</option>
            <option value="4 luggage">4 luggage</option>
            <option value="5+ luggage">5+ luggage</option>
          </select>
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="date"
            name="pickupDate"
            value={pickupDate}
            placeholder="Journey Date"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="time"
            name="journeyTime"
            value={journeyTime}
            placeholder="Journey Time"
            className="time__picker"
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <textarea
            rows={5}
            name="description"
            value={description}
            type="textarea"
            className="textarea"
            placeholder="Write"
            onChange={handleChange}
          ></textarea>
        </FormGroup>

        <Button type="submit" color="primary">
          Confirm
        </Button>
      </Form>
    </>
  );
};

export default BookingForm;
