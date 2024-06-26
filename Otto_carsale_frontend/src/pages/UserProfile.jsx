import { useEffect, useState, useCallback } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Order from "../components/UI/Order";
import "../styles/user-profile.css";

const UserProfile = () => {
  const [user, setUser] = useState({
    orders: [],
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    profilePic: "",
  });
  const [role, setRole] = useState("");

  const userID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");

  const logOut = useCallback(async () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("role");
    window.location.href = "/";
  }, []);

  const goDashboard = () => {
    window.location.href = "https://github.com/Otto-Car-Sale/Otto-Frontend";
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/users/user/${userID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser({
          orders: data.orders,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phoneNO,
          address: data.address,
          profilePic: data.profilePic,
        });
        setRole(localStorage.getItem("role"));
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("email", data.email);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [token, userID]);

  const delAcc = async () => {
    try {
      await fetch(`http://localhost:5001/api/users/user/${userID}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      logOut();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <Helmet title="User">
      <CommonSection title="Profile" />
      <section>
        <div className="section__header">
          <div>
            <img
              src={`http://localhost:4000/public/${user.profilePic}`}
              alt="profile"
              className="profile__pic"
            />
          </div>
          <div className="details_sec">
            <h3 className="topics__title">Welcome {user.firstName}</h3>
            <h4>Name : {user.firstName} {user.lastName}</h4>
            <h4>Email : {user.email}</h4>
            <h4>Phone : {user.phone}</h4>
            <h4>Address : {user.address}</h4>
            <div className="flex justify-center items-center gap-1 pb-10">
              {role === `ADMIN${token}` && (
                <button className="dashboard__btn" onClick={goDashboard}>
                  Dashboard
                </button>
              )}
              <button className="logout__btn" onClick={logOut}>
                Log Out
              </button>
              {role !== `ADMIN${token}` && (
                <button className="del_btn" onClick={delAcc}>
                  Delete account
                </button>
              )}
            </div>
          </div>
        </div>

        <Container>
          <Row>
            {role === `ADMIN${token}` ? (
              <div className="flex items-center justify-center">
                <h4 className="mzg">
                  You are logged in as admin. Visit admin dashboard for more features.
                </h4>
              </div>
            ) : user.orders.length === 0 ? (
              <div className="flex items-center justify-center">
                <h2 className="section__title">No orders found</h2>
              </div>
            ) : (
              user.orders.map((order, index) => <Order key={index} order={order} />)
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default UserProfile;