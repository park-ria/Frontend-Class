import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    //const url = `http://localhost:3000/products?q=${searchQuery}`;
    const url = `https://my-json-server.typicode.com/park-ria/musinsamall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3} key={index}>
            <ProductCard item={menu} />
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
};

export default ProductAll;
