import React, { useState } from "react";
import { Form, FormGroup, Button } from "reactstrap";
import axios from "axios";
import "../../styles/booking-form.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    passengers: "",
    luggage: "",
    journeyDate: "",
    journeyTime: "",
    note: "",
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    fromAddress,
    toAddress,
    passengers,
    luggage,
    journeyDate,
    journeyTime,
    note,
  } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      firstName,
      lastName,
      email,
      phoneNumber,
      fromAddress,
      toAddress,
      passengers,
      luggage,
      journeyDate,
      journeyTime,
      note,
    });

    try {
      // const response = await axios.post("/api/orders", body, config);
      // console.log(response.data);
      console.log(body);

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
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
        </FormGroup>

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
            name="toAddress"
            value={toAddress}
            placeholder="To Address"
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <select
            name="passengers"
            id=""
            value={passengers}
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
            name="luggage"
            id=""
            value={luggage}
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
            name="journeyDate"
            value={journeyDate}
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
            name="note"
            value={note}
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
