import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProductsOnCar from "../context/ProductsCar";
import styled from "styled-components";

const ProductoCarrito = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 3fr;
  gap: 4rem;
  align-items: center;
  border-bottom: 2px solid #cfcfcf;
  padding: 3rem 0;
`;

const ProductoImagen = styled.img`
  width: 130px;
  height: 220px;
  @media (min-width: 768px) {
    width: 250px;
    height: 350px;
  }
`;

const ProductoParrafo = styled.p`
  margin: 0 0 1rem 0;
`;

const ProductName = styled.p`
  margin: 0 0 1rem 0;
  font-weight: 600;
  font-size: 1.2rem;
`;

const MainContenedor = styled.div`
  display: grid;
  gap: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
    align-items: flex-start;
  }
`;
const SubtotalPrice = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
`;

const ButtonDelete = styled.button`
  background-color: white;
  position: absolute;
  color: black;
  top: 3rem;
  right: 1rem;
  width: 25px;
  height: 25px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;

const ParrafoTotal = styled.p`
  background-color: #f9fafb;
  padding: 3rem;
  border-radius: 1rem;
  font-size: 1.5rem;
`;

const ButtonCheckout = styled.button`
  border: none;
  outline: none;
  margin: auto;
  width: 100%;
  padding: 16px 0;
  margin: 10px 0;
  background-color: #8a817c;
  color: black;
  font-size: 18px;
  cursor: pointer;
`;

const NumberInput = styled.input`
  margin: 2px;
  width: 50px;
`;
const ShoppingCarPage = () => {
  const { carrito, actualizarCantidad, eliminarProducto } =
    useContext(ProductsOnCar);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.quantity * producto.price,
      0
    );

    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <div>
      <MainContenedor>
        {carrito.length === 0 ? (
          ""
        ) : (
          <div>
            {carrito.map((producto) => (
              <ProductoCarrito key={producto.id}>
                <div>
                  <ProductoImagen src={producto.imagen} alt={producto.name} />
                </div>
                <div>
                  <ProductName>{producto.name}</ProductName>
                  <div>
                    <ProductoParrafo>
                      Items:{" "}
                      {producto.quantity > producto.stock
                        ? producto.stock
                        : producto.quantity}
                    </ProductoParrafo>
                    <NumberInput
                      type="number"
                      id="items"
                      name="items"
                      min={1}
                      max={producto.stock}
                      value={
                        producto.quantity > producto.stock
                          ? producto.stock
                          : producto.quantity
                      }
                      onChange={(e) =>
                        actualizarCantidad({
                          quantity: e.target.value,
                          id: producto.id,
                        })
                      }
                    />
                  </div>
                  <ProductoParrafo>${producto.price} c/u</ProductoParrafo>
                  <ProductoParrafo>
                    Subtotal: $
                    <SubtotalPrice>
                      {producto.price * producto.quantity}
                    </SubtotalPrice>
                  </ProductoParrafo>
                </div>
                <ButtonDelete
                  type="button"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  X
                </ButtonDelete>
              </ProductoCarrito>
            ))}
          </div>
        )}
        <div>
          {total > 0 ? (
            <>
              <h2>Order Summary</h2>
              <ParrafoTotal>Total: ${total}</ParrafoTotal>
              <Link to={"/checkout"}>
                <ButtonCheckout> Go to checkout </ButtonCheckout>
              </Link>
            </>
          ) : (
            <h2>Empty</h2>
          )}
        </div>
      </MainContenedor>
    </div>
  );
};

export default ShoppingCarPage;
