import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsOnCar from "../context/ProductsCar";
import styled from "styled-components";

const Formulario = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  :hover {
    background-color: #d7cccce8;
  }
`;
const ButtonCar = styled.button`
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
const TableContainer = styled.table`
  border: 1px solid;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  text-align: justify;
`;

const ProductName = styled.td`
  font-size: 1.1rem;
  width: 170px;
  padding: 2px 5px;

  /* BOTH of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 500px) {
    width: auto;
  }
`;

const ButtonOrder = styled.input`
  background-color: #bcb8b1;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  :hover {
    background-color: #f2f2f2;
    color: black;
  }
`;

const TotalContainer = styled.div`
  display: grid;
  justify-content: end;
`;
const CheckoutPage = () => {
  const { carrito } = useContext(ProductsOnCar);

  const [order, setOrder] = useState({});
  const [nameCustomer, setNameCustomer] = useState("");
  const [emailCustomer, setEmailCustomer] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState(false);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.quantity * producto.price,
      0
    );

    setTotal(calculoTotal);
  }, [carrito]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderInfo = {
      nameCustomer,
      emailCustomer,
      zipCode,
      notes,
      totalCar: total,
    };
    setOrder(orderInfo);

    if ([nameCustomer, emailCustomer, zipCode].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    console.log(order);
  };

  const Error = ({ children }) => {
    return <div>{children}</div>;
  };

  return (
    <div>
      <Formulario onSubmit={handleSubmit}>
        <div>
          {error && (
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
          )}
          <div>
            <label htmlFor="nameCustomer">Name:</label>
            <br />
            <TextInput
              id="nameCustomer"
              type="text"
              placeholder="Name"
              value={nameCustomer}
              onChange={(e) => setNameCustomer(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="emailCustomer">E-mail:</label>
            <br />

            <TextInput
              id="emailCustomer"
              type="email"
              placeholder="E-mail"
              value={emailCustomer}
              onChange={(e) => setEmailCustomer(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="zipCode">Zip Code:</label>
            <br />

            <TextInput
              type="text"
              placeholder="Zip Code"
              required
              pattern="\d{5,5}(-\d{4,4})?"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="notes">Notes:</label>
            <br />

            <TextInput
              id="notes"
              type="textarea"
              placeholder="Order notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <TableContainer>
            <tbody>
              <tr style={{ fontSize: "1.1rem" }}>
                <th>Product Name</th>
                <th style={{ textAlign: "center" }}>Total items</th>
                <th style={{ textAlign: "right" }}>Subtotal $</th>
              </tr>
            </tbody>
            {carrito.map((product) => {
              return (
                <tbody key={product.id}>
                  <tr>
                    <ProductName>
                      {" "}
                      {product.name} <hr />
                    </ProductName>
                    <td style={{ textAlign: "center" }}>
                      {" "}
                      {product.quantity}
                      {""} pz
                      <hr />
                    </td>
                    <td style={{ textAlign: "end" }}>
                      {product.quantity * product.price} <hr />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </TableContainer>
          <TotalContainer>
            <p style={{ textAlign: "end", fontSize: "1.3rem" }}>
              Total: ${total}
            </p>
            <ButtonOrder type="submit" value="Place Order" />
          </TotalContainer>
        </div>
        <div></div>
      </Formulario>
      <Link to={"/cart"}>
        <ButtonCar>Back to car </ButtonCar>
      </Link>
    </div>
  );
};

export default CheckoutPage;
