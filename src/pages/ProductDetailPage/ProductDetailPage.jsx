import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductsOnCar from '../../components/context/ProductsCar';
import { useProduct } from '../../utils/hooks/useProduct';
import Spinner from '../../components/spinner';
import * as S from './ProductCard.styled';

const ProductDetailPage = () => {
	const { agregarCarrito } = useContext(ProductsOnCar);

	const { productId } = useParams();

	const { data, isLoading } = useProduct({ productId });

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<ProductCard data={data} agregarCarrito={agregarCarrito} />
			)}
			<Link to={'/products'}>
				<S.ButtonProducts>View all products</S.ButtonProducts>
			</Link>
		</>
	);
};

export default ProductDetailPage;
