import { useState, useEffect } from "react";
import { Navbar, ProductCard } from "components";
import { useFilterReducer } from "context/filter-context";
import axios from "axios";
import  "./products.css"

export const Products = () => {
    const [ products, setProducts] = useState([])

    const { state, dispatch } = useFilterReducer();
    const { sortBy } = state

    useEffect(() => {
        (async function () {
            try{
                let productItems = await axios.get("/api/products");
                setProducts(productItems.data.products)
            }catch (err) {
            }
        })()
    }, [])


    const sortedProductsByPrice = ( sortby, items) => {
        if (sortby === "LOW_TO_HIGH")
            return [...products].sort((item1, item2) => item1.price - item2.price);
        if (sortby === 'HIGH_TO_LOW')
            return [...products].sort((item1, item2) => item2.price - item1.price);
        return products;


    }
    const sortedProducts = sortedProductsByPrice( sortBy, products)

    

    

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
                        <span>50</span>
                        <span>100</span>
                        <span>150</span>
                    </div>

                    <input type="range" className="range"/>
                    <label htmlFor=""></label>

                    <h3 className="margin-top">Category</h3>
                    <div className="flex-column">
                        <label><input type="checkbox" name="Bats" />Bats</label>
                        
                        <label><input type="checkbox" name="Balls" />Balls</label>
                        
                        <label><input type="checkbox" name="Stumps" />Stumps</label>
                        
                        <label><input type="checkbox" name="Gloves" />Gloves</label>
                    </div>
                    
                    <h3 className="margin-top">Rating</h3>
                    <div className="flex-column">
                        
                    <label htmlFor="rating-4"><input type="radio" name="rating" value="4" id="rating-4" />4 star and above</label>
                    
                    <label htmlFor="rating-3"><input type="radio" name="rating" value="3" id="rating-3" />3 star and above</label>
                    
                    <label htmlFor="rating-2"><input type="radio" name="rating" value="2" id="rating-2" />2 star and above</label>
                    </div>
                    
                    <h3 className="margin-top">Sort By</h3>
                    <div className="flex-column">
                        
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
                    sortedProducts?.map((product) => {
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