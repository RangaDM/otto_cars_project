import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";
import CommonSection from "../components/UI/CommonSection";
import Loading from "../components/UI/Loading";

const VanListing = () => {
  const [vanData, setvanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/vehicles/retrieveAllVehicles"
      );
      setvanData(response.data.van);
      setLoading(false);
    } catch (error) {
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
    if (vanData.length === 0) {
      const timer = setTimeout(() => {
        setShowEmptyMessage(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowEmptyMessage(false);
    }
  }, [vanData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <h4 className="font-semibold">{error}</h4>
      </div>
    );
  }

  return (
    <Helmet title="vans">
      <CommonSection title="Van Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
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
                <h4 className="font-semibold">No van found.</h4>
              </div>
            )}
            {!showEmptyMessage &&
              vanData.map((item,index) => <CarItem item={item} key={index} />)}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default VanListing;
