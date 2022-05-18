import { useState, useEffect } from "react";
import { Navbar, ProductCard, Categories, Rating, SortBy, Price, Footer} from "components";
import { useFilter } from "context";
import { filterProductsByCategory, sortProductsByPrice, filterProductsByRating, filterProductsByPrice } from "utils";
import axios from "axios";
import  "./products.css"

export const Products = () => {
    const [ products, setProducts] = useState([])

    const { state, dispatch } = useFilter();
    const { sortBy, rating, categories, price } = state
    const { bats, balls, pads, gloves } = categories

    useEffect(() => {
        (async function () {
            try{
                let productItems = await axios.get("/api/products");
                setProducts(productItems.data.products)
            }catch (err) {
            }
        })()
    }, [])


    const priceFilteredProducts = filterProductsByPrice( price, products)

    const ratedProducts = filterProductsByRating( rating , priceFilteredProducts)

    const categorisedProducts = filterProductsByCategory( bats, balls, pads, gloves, ratedProducts)

    const sortedProducts = sortProductsByPrice( sortBy, categorisedProducts)
    

return(
    <div>
        <Navbar />

        <main className="filter-wrapper">

            <div className="filter">
                <aside className="flex-column">
                    <div className="flex-row space-between">
                        <h3 className="filter-segment">Filters</h3>
                        <span onClick={() => dispatch({type:"CLEAR"})} className="filter-clear">Clear</span>
                    </div>
                    
                    <Price />
                    <Categories />
                    <Rating /> 
                    <SortBy />
                   
                </aside>
            </div>

            <div className="cards">
                {
                    sortedProducts?.map((product) => {
                        return (
                            <ProductCard 
                            key = {product._id}
                            productItem={product} 
                            />
                        )
                    })
                }

            </div>

        </main>
        <Footer />

    </div>
)

}