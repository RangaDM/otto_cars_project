import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Order from "../components/UI/Order";
import "../styles/user-profile.css";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [orders, setOrders] = useState([]);

  const logOut = () => {
    localStorage.removeItem("userID");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const userID = localStorage.getItem("userID");
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/orders/retrievCustomerOrders/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Helmet title="User">
      <CommonSection title="My Orders" />
      <section>
        <div className="px-20 pb-3 flex items-center justify-between">
          <h2 className="section__title">Welcome {orders[0]?.customerName}</h2>
          <button className="logout__btn" onClick={logOut}>
            Log Out
          </button>
        </div>

        <Container>
          <Row>
            {orders.length === 0 ? (
              <div className="flex items-center justify-center">
                <h2 className="section__title">No orders found</h2>
              </div>
            ) : (
              orders.map((order) => <Order key={order._id} order={order} />)
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default UserProfile;
