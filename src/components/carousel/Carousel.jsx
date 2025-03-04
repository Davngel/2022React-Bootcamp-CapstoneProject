import React from "react";
import dataCarousel from "../../mocks/en-us/product-categories.json";
import styled from "styled-components";

const ContenedorCarousel = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  background-color: #e0afa0;

  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, fr);
    display: inline-flex;
  }
`;

const ImagenCont = styled.img`
  padding: 20px;
  margin: 3px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

// en linea celular
// 5 en linea las demás pantallas.

const Category = styled.div`
  width: 100%;
  margin: 3px;
  justify-content: center;
  align-items: center;
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) {
    border-right: 2px solid black;
  }
`;

const Parrafo = styled.p`
  text-align: center;
  font-size: 20px;
  border-bottom: 2px solid black;
  padding: 5px;
  @media (min-width: 768px) {
    font-size: 15px;
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    font-weight: 500;
  }
`;
const Carousel = () => {
  return (
    <>
      <ContenedorCarousel>
        {dataCarousel.results.map((result) => (
          <Category key={result.id}>
            <ImagenCont src={result.data.main_image.url} alt="" />
            <Parrafo>{result.data.name}</Parrafo>
          </Category>
        ))}
      </ContenedorCarousel>
    </>
  );
};

export default Carousel;
