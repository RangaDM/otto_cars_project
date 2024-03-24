import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import axios from "axios";
import Loading from "../components/UI/Loading";

const CarListing = () => {

  const [carData , setcarData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try{

        const vehicle = await axios.get('http://localhost:5000/api/v1/vehicles/retrieveAllVehicles');
        setcarData(vehicle.data.car);

      }catch(e){
        console.log(e);
      }
  }
  fetchData();

}, []);

  if(carData.length === 0){
    return <Loading />;
  }

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;