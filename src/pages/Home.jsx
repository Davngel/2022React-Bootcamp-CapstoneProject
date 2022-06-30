import React from "react";
import Carousel from "../components/carousel/Carousel";
import { Slider } from "../components/slider/Slider";
import GridFeatured from "../components/grid/GridFeatured";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonProducts = styled.button`
  border: none;
  outline: none;
  width: 100%;
  padding: 16px 0;
  margin: 10px 0;
  background-color: #8a817c;
  color: black;
  font-size: 18px;
  cursor: pointer;
`;

export const Home = () => {
  return (
    <>
      <Slider
        controles={true}
        autoplay={false}
        velocidad="3000"
        intervalo="5000"
      />
      <Carousel />
      <GridFeatured />
      <Link to={"/products"}>
        <ButtonProducts>View all products</ButtonProducts>
      </Link>
    </>
  );
};
