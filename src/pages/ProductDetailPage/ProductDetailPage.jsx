import React,{useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import ProductsOnCar from '../../components/context/ProductsCar'
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../utils/constants';
import { useLatestAPI } from '../../utils/hooks/useLatestAPI'
import Spinner from '../../components/spinner/Spinner';
import styled from 'styled-components';


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

const ProductDetailPage = () => {
  const {agregarCarrito} = useContext(ProductsOnCar)

    const {productId} = useParams()


const useProduct = () => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProduct, setfeaturedProduct] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getfeaturedProduct() {
      try {
        setfeaturedProduct({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setfeaturedProduct({ data, isLoading: false });
      } catch (err) {
        setfeaturedProduct({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getfeaturedProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredProduct;


}

const {data, isLoading} = useProduct()

  return (
    <>

{
    isLoading ? (
<Spinner/>
    ):
(    <ProductCard
    data={data}
    agregarCarrito={agregarCarrito}
    />)
}
<Link to={'/products'}>
      <ButtonProducts>View all products</ButtonProducts>
      </Link>
</> )
}

export default ProductDetailPage