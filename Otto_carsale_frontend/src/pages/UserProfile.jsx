import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Order from "../components/UI/Order";
import "../styles/user-profile.css";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [orders, setOrders] = useState([]);
  const userID = localStorage.getItem("userID");

  const logOut = () => {
    localStorage.removeItem("userID");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/orders/retrievCustomerOrders/${userID}`);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrders();
  }, [userID]);

  return (
    <Helmet title="User">
      <CommonSection title="My Orders" />
      <section>
        <section className="px-20">
          <h4 className="topics__title">Welcome {orders.length > 0 ? orders[0].customerName : ""}</h4>
          <button className="logout__btn" onClick={logOut}>Log Out</button>
        </section>
        
        <Container>
          <Row>
            {orders.length === 0 ? (
              <h2 className="section__title">No orders found</h2>
            ) : (
              orders.map((order) => (
                <Order key={order._id} order={order} />
              ))
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default UserProfile;
