/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import {useFeaturedCategories} from '../../utils/hooks/useFeaturedCategories'
import { ProductsProvider } from '../context/ProductsCar';
import ProductList from './ProductList';
import { BrowserRouter } from "react-router-dom";



jest.mock('../../utils/hooks/useFeaturedCategories')




describe('Test on <ProductList/>', () =>{




    test('Product Category Sidebar is fetching and rendering data from the API', async() => {

        const categories = {
            "results": [
                {
                    "id": "YWHx-xIAAC0Ayj7i",
                    "uid": null,
                    "url": null,
                    "type": "category",
                    "href": "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHx-xIAAC0Ayj7i%22%29+%5D%5D",
                    "tags": [],
                    "first_publication_date": "2021-10-09T23:33:05+0000",
                    "last_publication_date": "2021-10-12T23:45:23+0000",
                    "slugs": ["bed--bath"],
                    "linked_documents": [],
                    "lang": "en-us",
                    "alternate_languages": [
                        {
                            "id": "YWHx7xIAACsAyj6p",
                            "type": "category",
                            "lang": "es-mx"
                        }
                    ],
                    "data": {
                        "name": "Bed & Bath",
                        "main_image": {
                            "dimensions": {
                                "width": 621,
                                "height": 398
                            },
                            "alt": "Bath",
                            "copyright": null,
                            "url": "https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398"
                        }
                    }
                }
            ]
        }

        useFeaturedCategories.mockReturnValue({
            data: categories,
            isLoading: false

        })

        render(<ProductsProvider><ProductList/></ProductsProvider>, {wrapper: BrowserRouter})
        expect(screen.getAllByRole('checkbox').length).toBe(1)

    })




})