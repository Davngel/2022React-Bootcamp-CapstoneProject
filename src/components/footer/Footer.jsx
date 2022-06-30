import React from "react";
import styled from "styled-components";

const CajaFooter = styled.div`
  display: flex;
  margin-top: 5rem;
  padding: 10%;
  font-size: large;
  text-align: center;
  justify-content: center;
  text-decoration: underline;
  border-top: 1px solid black;
`;
const Footer = () => {
  return (
    <CajaFooter>
      <p>Ecommerce created during Wizeline's Academy React Bootcamp</p>
    </CajaFooter>
  );
};

export default Footer;
