import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
// import vanData from "../assets/data/vanData";
import CarRentItem from "../components/UI/Rent_items";
import axios from "axios";
import Loading from "../components/UI/Loading";

const RentListing = () => {
  const [rentVehicle, setRentVehicle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/vehicles");
      setRentVehicle(response);
      setLoading(false);
    } catch {
      setError("Failed to fetch data. Please try again later.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();

    fetchData().catch((error) => {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        setError("Failed to fetch data. Please try again later.");
      }
    });

    return () => {
      source.cancel("Component unmounted, request canceled.");
    };
  }, [fetchData]);

  useEffect(() => {
    if (rentVehicle.length === 0) {
      const timer = setTimeout(() => {
        setShowEmptyMessage(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowEmptyMessage(false);
    }
  }, [rentVehicle]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <Helmet title="Rent">
      <CommonSection title="Rent Listing" />

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
            {showEmptyMessage && (
              <div className="flex justify-center items-center">
                <h4 className="font-semibold">Nothing found.</h4>
              </div>
            )}
            {!showEmptyMessage &&
              rentVehicle.map((item, index) => (
                <CarRentItem item={item} key={index} />
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default RentListing;
