import { useFilter } from "context";

export const Price = () => {
    const { state, dispatch } = useFilter();
    const { price } = state
    return (
        <div>
            <h3 className="margin-top filter-segment">Price</h3>
                <div className="space-between">
                    <span className="price-value">200</span>
                    <span className="price-value">1000</span>
                    <span className="price-value">2000</span>
                </div>
                <label htmlFor="priceRange">                       
                    <input 
                    type="range" 
                    className="range"
                    id="priceRange"
                    min="200"
                    max="2000"
                    step="200"
                    value={price}
                    onChange={(e) => dispatch({type:"PRICERANGE",priceValue:e.target.value})}
                    />
                    </label>

        </div>
    )
}