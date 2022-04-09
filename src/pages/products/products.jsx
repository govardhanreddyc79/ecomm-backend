import { useState, useEffect } from "react";
import { Navbar, ProductCard } from "components";
import { useFilterReducer } from "context/filter-context";
import { filterProductsByCategory, sortProductsByPrice, filterProductsByRating } from "utils";
import axios from "axios";
import  "./products.css"

export const Products = () => {
    const [ products, setProducts] = useState([])

    const { state, dispatch } = useFilterReducer();
    const { sortBy, rating, categories, price } = state
    const { bats, balls, pads, gloves } = categories
    console.log(price)

    useEffect(() => {
        (async function () {
            try{
                let productItems = await axios.get("/api/products");
                setProducts(productItems.data.products)
            }catch (err) {
            }
        })()
    }, [])

    const filterByPrice = (priceRange, items) => {
        return [...items].filter((item) => item.price <= priceRange)
    }

    const priceFilteredProducts = filterByPrice( price, products)
    const sortedProducts = sortProductsByPrice( sortBy, priceFilteredProducts)

    const ratedProducts = filterProductsByRating( rating , sortedProducts)

    const categorisedProducts = filterProductsByCategory( bats, balls, pads, gloves, ratedProducts)
    

return(
    <div>
        <Navbar />

        <main className="filter-wrapper">

            <div className="filter">
                <aside className="flex-column">
                    <div className="flex-row space-between">
                        <h3>Filters</h3>
                        <a href="/" className="clear">Clear</a>
                    </div>
                    <h3 className="margin-top">Price</h3>
                    <div className="space-between">
                        <span>200</span>
                        <span>1000</span>
                        <span>2000</span>
                    </div>

                    
                    <label htmlFor="priceRange">                       
                        <input 
                        type="range" 
                        className="range"
                        id="priceRange"
                        min="200"
                        max="2000"
                        step="200"
                        onChange={(e) => dispatch({type:"PRICERANGE",priceValue:e.target.value})}
                        />
                        </label>

                    <h3 className="margin-top">Category</h3>
                    <div className="flex-column element-spacing">
                        <label>
                            <input 
                            type="checkbox" 
                            name="Bats"
                            id="bats"
                            checked = {bats} 
                            onChange = {() => dispatch({ type:"CATEGORY",categoryValue:"Bats"})}
                            />
                            Bats
                            </label>
                        
                        <label>
                            <input 
                            type="checkbox" 
                            name="Balls"
                            id="balls"
                            checked = {balls} 
                            onChange = {() => dispatch({ type:"CATEGORY",categoryValue:"Balls"})} 
                            />
                            Balls
                            </label>
                        
                        <label>
                            <input 
                            type="checkbox" 
                            name="Pads" 
                            id="pads"
                            checked = {pads} 
                            onChange = {() => dispatch({ type:"CATEGORY",categoryValue:"Pads"})}
                            />
                            Pads
                            </label>
                        
                        <label>
                            <input 
                            type="checkbox" 
                            name="Gloves" 
                            id="gloves"
                            checked = {gloves} 
                            onChange = {() => dispatch({ type:"CATEGORY",categoryValue:"Gloves"})}
                            />
                            Gloves
                            </label>
                    </div>
                    
                    <h3 className="margin-top">Rating</h3>
                    <div className="flex-column element-spacing">
                        
                    <label htmlFor="rating-4">
                        <input 
                        type="radio"
                        name="rating"
                        value="4" 
                        id="rating-4"
                        checked = {rating === 4}
                        onChange = {() => dispatch({ type:"RATING", ratingValue:"4"})} 
                        />
                        4 star and above
                        </label>
                    
                    <label htmlFor="rating-3">
                        <input 
                        type="radio" 
                        name="rating" 
                        value="3" 
                        id="rating-3"
                        checked = {rating === 3}
                        onChange = {() => dispatch({ type:"RATING", ratingValue:"3"})} 
                        />
                        3 star and above
                        </label>
                    
                    <label htmlFor="rating-2">
                        <input 
                        type="radio" 
                        name="rating" 
                        value="2" 
                        id="rating-2" 
                        checked = {rating === 2}
                        onChange = {() => dispatch({ type:"RATING", ratingValue:"2"})}
                        />
                        2 star and above
                        </label>
                    </div>
                    
                    <h3 className="margin-top">Sort By</h3>
                    <div className="flex-column element-spacing">
                        
                    <label>
                        <input
                         type="radio" 
                         name="sort-by" 
                         id="low-to-high"
                         checked={sortBy === "LOW_TO_HIGH"}
                         onChange = {() => dispatch({ type: "LOW_TO_HIGH" })}
                         />
                         Price - Low to High
                         </label>
                    <label>
                        <input
                        type="radio"
                        name="sort-by" 
                        id="high-to-low"
                        checked={sortBy === "HIGH_TO_LOW"}
                        onChange = {() => dispatch({ type: "HIGH_TO_LOW" })}
                        />
                        Price - High to Low
                        </label>

                    </div>          
                    </aside>
            </div>

            <div className="cards">
                {
                    categorisedProducts?.map((product) => {
                        return (
                            <ProductCard key = {product._id} productItem={product} />
                        )
                    })
                }

            </div>

        </main>

    </div>
)

}