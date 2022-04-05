import { useState, useEffect } from "react";
import { Navbar, ProductCard } from "components";
import axios from "axios";

export const Products = () => {
    const [ products, setProducts] = useState([])

    useEffect(() => {
        (async function () {
            try{
                let productItems = await axios.get("/api/products");
                console.log(productItems.data.products)
                setProducts(productItems.data.products)
            }catch (err) {}
        })()
    }, [])

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
                    <div>
                        <input type="checkbox" name="Bats" />
                        <label>Bats</label>
                        <input type="checkbox" name="Balls" />
                        <label>Balls</label>
                        <input type="checkbox" name="Stumps" />
                        <label>Stumps</label>
                        <input type="checkbox" name="Gloves" />
                        <label>Gloves</label>
                    </div>
                    
                    <h3 className="margin-top">Rating</h3>
                    <div>
                        <input type="radio" name="rating" value="4" id="rating-4" />
                    <label htmlFor="rating-4">4 star and above</label>
                    <input type="radio" name="rating" value="3" id="rating-3" />
                    <label htmlFor="rating-3">3 star and above</label>
                    <input type="radio" name="rating" value="2" id="rating-2" />
                    <label htmlFor="rating-2">2 star and above</label>
                    </div>
                    
                    <h3 className="margin-top">Sort By</h3>
                    <div>
                        <input type="radio" name="sort-by" />
                    <label>Price - Low to High</label>
                    <input type="radio" name="sort-by" />
                    <label>Price - High to Low</label>

                    </div>          
                    </aside>
            </div>

            <div className="cards">
                {
                    products.map((product) => {
                        return (
                            <ProductCard key = {product._id} productItem={product}/>
                        )
                    })
                }

                <ProductCard />

            </div>

        </main>

    </div>
)

}