import React from 'react';
import { Card, Button } from 'reactstrap';

const OrderCard = ({ order }) => {
  const { id, email, phoneNumber, fromAddress, toAddress, passengers, luggage, journeyDate, journeyTime, note } = order;

  return (
    <Card className="mb-3">
      <Card.Header>{email}</Card.Header>
      <Card.Body>
        <Card.Title>Order #{id}</Card.Title>
        <Card.Text>
          Phone Number: {phoneNumber}
          <br />
          From Address: {fromAddress}
          <br />
          To Address: {toAddress}
          <br />
          Passengers: {passengers}
          <br />
          Luggage: {luggage}
          <br />
          Journey Date: {journeyDate}
          <br />
          Journey Time: {journeyTime}
          <br />
          Note: {note}
        </Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;