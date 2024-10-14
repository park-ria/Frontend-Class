import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    //const url = `http://localhost:3000/products?q=${searchQuery}`;
    // const url = `https://my-json-server.typicode.com/park-ria/musinsamall/products?q=${searchQuery}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // setProductList(data);
    dispatch(productAction.getProduct(searchQuery));
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
