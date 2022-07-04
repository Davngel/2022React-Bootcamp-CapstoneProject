import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchTerm } from '../../utils/hooks/useSearchTerm';
import Spinner from '../spinner';
import * as S from './Search.styled';
import ProductsOnCar from '../context/ProductsCar';

const SearchPageResults = () => {
	const { agregarCarrito } = useContext(ProductsOnCar);
	const { search } = useLocation();
	const searchParams = new URLSearchParams(search);
	const [searchTerm, setSearchTerm] = useState();
	const [pageNumber, setPageNumber] = useState(1);
	const [tope, setTope] = useState(20);
	const [hiddenButtonR, setHiddenButtonR] = useState(true);
	const [hiddenButtonL, setHiddenButtonL] = useState(true);

	const postNumber = 20;

	const currentPageNumber = pageNumber * postNumber - postNumber;

	useEffect(() => {
		setSearchTerm(searchParams.get('q'));
	}, [search]);

	const { data, isLoading } = useSearchTerm({ searchTerm });

	useEffect(() => {
		if (data.results_size > 20) {
			setHiddenButtonR(false);
		}
	}, [data]);
	useEffect(() => {
		if (data.results_size < 20) {
			setHiddenButtonL(true);
		}
	}, [data]);

	const handlePrev = () => {
		if (pageNumber === 1) return;
		setPageNumber(pageNumber - 1);
		setTope(tope - 20);
	};
	const handleNext = () => {
		setPageNumber(pageNumber + 1);
		setTope(tope + 20);
	};

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : data.total_results_size === 0 ? (
				<div>Not a match `&quot;`{searchTerm}`&quot;`</div>
			) : (
				<>
					<S.ProductContenedor>
						{data.results
							.slice(currentPageNumber, tope)
							.map((result, index) => {
								return (
									<div key={index}>
										<S.Producto key={index}>
											<S.CajaName>
												<S.ProductName>{result.data.name}</S.ProductName>
											</S.CajaName>
											<S.ProductImage
												src={result.data.mainimage.url}
												alt={result.data.name}
											/>
											<S.PrizeCategory>
												{result.data.category.slug}
											</S.PrizeCategory>
											<S.PrizeCategory>${result.data.price}</S.PrizeCategory>
											<S.Description>
												{result.data.short_description}
											</S.Description>
											<br />
										</S.Producto>
										<S.ButtonCart
											onClick={() => {
												const productoSeleccionado = {
													id: result.data.name,
													name: result.data.name,
													imagen: result.data.mainimage.url,
													price: result.data.price,
													quantity: 1,
													stock: result.data.stock,
												};
												agregarCarrito(productoSeleccionado);
											}}
										>
											Add to car
										</S.ButtonCart>
									</div>
								);
							})}
					</S.ProductContenedor>
					<S.ContenedorButton>
						<button onClick={handlePrev} hidden={hiddenButtonL}>
							prev
						</button>
						<button onClick={handleNext} hidden={hiddenButtonR}>
							next
						</button>
					</S.ContenedorButton>
				</>
			)}
		</div>
	);
};

export default SearchPageResults;
