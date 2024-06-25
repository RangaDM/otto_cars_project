import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Order from "../components/UI/Order";
import "../styles/user-profile.css";

const UserProfile = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  const logOut = async () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  const goDashboard = () => {
    window.location.href = "https://github.com/Otto-Car-Sale/Otto-Frontend";
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const userID = localStorage.getItem("userID");

      // try {
      //   const response = await fetch(
      //     `http://localhost:5000/api/v1/orders/retrievCustomerOrders/${userID}`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );
      //   const data = await response.json();
      //   setOrders(data);
      //   console.log(data);
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }
    };

    fetchOrders();
  }, [token]);

  return (
    <Helmet title="User">
      <CommonSection title="Profile" />
      <section>
        <div className="section__header">
          <h2 className="section__title">
            Welcome {localStorage.getItem("firstName")}
          </h2>
          <div className="flex justify-center items-center">
            {localStorage.getItem("role") ===
            `ADMIN${localStorage.getItem("token")}` ? (
              <button className="dashboard__btn" onClick={goDashboard}>
                Dashboard
              </button>
            ) : null}
            <button className="logout__btn" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>

        <Container>
          <Row>
            {
              localStorage.getItem("role") ===
              `ADMIN${localStorage.getItem("token")}` ? (
                <div className="flex items-center justify-center">
                  <h4 className="mzg">
                    You are logged in as admin. Visit admin dashboard for more
                    features.
                  </h4>
                </div>
              ) : null
              // orders.length === 0 ? (
              //   <div className="flex items-center justify-center">
              //     <h2 className="section__title">No orders found</h2>
              //   </div>
              // ) : (
              //   orders?.map((order) => <Order key={order._id} order={order} />)
              // )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default UserProfile;
