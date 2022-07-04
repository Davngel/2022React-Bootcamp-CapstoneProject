import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export const useSearchTerm = ({ searchTerm }) => {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [searchTermProduct, setSearchTermProduct] = useState(() => ({
		data: {},
		isLoading: true,
	}));
	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			return () => {};
		}

		const controller = new AbortController();

		async function getSearchTermProduct() {
			try {
				setSearchTermProduct({ data: {}, isLoading: true });

				const response = await fetch(
					`${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22${searchTerm}%22)%5D%5D&lang=en-us&pageSize=20`,
					{
						signal: controller.signal,
					}
				);
				const data = await response.json();

				setSearchTermProduct({ data, isLoading: false });
			} catch (err) {
				setSearchTermProduct({ data: {}, isLoading: false });
				console.error(err);
			}
		}

		getSearchTermProduct();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading, searchTerm]);

	return searchTermProduct;
};
