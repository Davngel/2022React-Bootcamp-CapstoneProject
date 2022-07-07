import {render, screen} from '@testing-library/react'
import { ProductsProvider } from '../context/ProductsCar';
import ShoppingCarPage from './ShoppingCarPage'





describe('Test on <ShoppingCarPage/>', () =>{

   
    test('Validate that an empty state is displayed when there are no results for the “searchTerm” provided', async() => {
        render(
            <ProductsProvider>
                <ShoppingCarPage/>
            </ProductsProvider>
        )

        expect(screen.getByText('Empty')).toBeInTheDocument()

    })
    test('Validate that the list of products is shown when there are items in the cart...', () => {
        const carrito = 
[{            id: "result.data.name",
            name: "result.data.name",
            imagen: "result.data.mainimage.url",
            price: 150,
            quantity: 1,
            stock: 10,},
            {            id: "result.data.name",
            name: "result.data.name",
            imagen: "result.data.mainimage.url",
            price: 150,
            quantity: 1,
            stock: 10,}]
 render(
            <ProductsProvider >
                <ShoppingCarPage/>
            </ProductsProvider>
        )
    })

})