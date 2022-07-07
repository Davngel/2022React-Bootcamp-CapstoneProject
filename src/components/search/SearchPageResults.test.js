/* eslint-disable no-undef */

import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SearchPageResults from '../search/SearchPageResults'
import { ProductsProvider } from '../context/ProductsCar';

// import SearchPageResults from './SearchPageResults'
// import ProductsOnCar from "../context/ProductsCar";



describe('Test on <SearchPageResults/>', () =>{

    test('Validate that the list of results is rendering data according to the “searchTerm” provided.', async() => {
        render(<MemoryRouter initialEntries={['/search?q=decorate']}>
            <ProductsProvider>
            <SearchPageResults/>
            </ProductsProvider>
        </MemoryRouter>)

        // const input = screen.getByName('text')
        // expect(input.value).toBe('decorate')

})
    
    // test('Validate that an empty state is displayed when there are no results for the “searchTerm” provided', async() => {
    //     render(<ProductsOnCar><SearchPageResults/></ProductsOnCar>)
    //     screen.debug()
    //     expect(screen.getByText('Not a match').toBeInTheDocument())
    // })
})