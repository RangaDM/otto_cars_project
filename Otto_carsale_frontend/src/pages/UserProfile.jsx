import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Order from "../components/UI/Order";

const UserProfile = () => {

  // const userID = localStorage.getItem("userID");
  // console.log("User ID from pro:", userID);

  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const myOrders = await axios.get("###");
  //       setOrders(myOrders.data);
  //       console.log(myOrders.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const orders = [
    {
      id: 1,
      name:"Travel to Kandy",
      model: "Toyota",
      brand: "Corolla",
      fuelType: "Petrol",
      manufacturedCountry: "Japan",
      vehicleId: 1,
      status: "pending",
    },
    {
      id: 2,
      name:"Travel to Galle",
      model: "Toyota",
      brand: "Corolla",
      fuelType: "Petrol",
      manufacturedCountry: "Japan",
      vehicleId: 2,
      status: "pending",
    },
    {
      id: 3,
      name:"Travel to Anuraadhapura",
      model: "Toyota",
      brand: "Corolla",
      fuelType: "Petrol",
      manufacturedCountry: "Japan",
      vehicleId: 3,
      status: "Completed",
    },
  ];

  return (
    <Helmet title="User">
      <CommonSection title="My Orders" />
      <section>
        <Container>
          <Row>
              {orders.map((order) => (
                <Order key={order.id} order={order} />
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default UserProfile;
