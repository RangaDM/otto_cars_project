import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import OrderCard from '../components/UI/OrderCard';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const UserProfile = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await fetch('/api/orders'); // Replace with your actual API endpoint
    const data = await response.json();
    setOrders(data);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
    <Container>
      <Row>
        <Col>
          <h1>My Orders</h1>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </Col>
      </Row>
    </Container>
    </section>
    </Helmet>
  );
};

export default UserProfile;