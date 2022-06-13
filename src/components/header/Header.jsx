import React from "react";
import carrito from "../../utils/img/carrito.png";
import Buscar from "../buscar/Buscar";
import styled from "styled-components";

const ContenedorHeader = styled.header`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: #e0afa0;
  border: 1px solid black;
`;

const Title = styled.h1`
  color: #463f3a;
  grid-column: 1/4;
  text-align: center;
  padding: 10px;
  margin-left: 24px;
  font-size: 31px;

  justify-content: center;
  display: inline-flex;
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 50px;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) {
    font-size: 70px;
  }
`;

const Carrito = styled.img`
  padding: 2px;
  background-color: white;
  border-radius: 10%;
  margin: 3px;
  height: 25px;
  width: 25px;
  grid-column: 4/4;
  border: 1px solid black;
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-column: 4/4;
    height: 30px;
    width: 30px;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) {
    height: 40px;
    width: 40px;
  }
`;
export const Header = ({titulo}) => {
  return (
    <>
      <ContenedorHeader>
        <Title>{titulo}</Title>
        <Buscar />
        <Carrito src={carrito} alt="" />
      </ContenedorHeader>
    </>
  );
};
