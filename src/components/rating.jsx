import { useFilter } from "context";

export const Rating = () => {
    const { state, dispatch } = useFilter();
    const { rating } = state

    return (
        <div>

            <h3 className="margin-top filter-segment">Rating</h3>
            <div className="flex-column element-spacing">    
            <label htmlFor="rating-4" className="category-labels">
                <input 
                className="margin-r"
                type="radio"
                name="rating"
                value="4" 
                id="rating-4"
                checked = {rating === 4}
                onChange = {() => dispatch({ type:"RATING", ratingValue:"4"})} 
                />
                4 ★ & above
                </label>

            <label htmlFor="rating-3" className="category-labels">
                <input 
                className="margin-r"
                type="radio" 
                name="rating" 
                value="3" 
                id="rating-3"
                checked = {rating === 3}
                onChange = {() => dispatch({ type:"RATING", ratingValue:"3"})} 
                />
                3 ★ & above
                </label>

            <label htmlFor="rating-2" className="category-labels">
                <input 
                className="margin-r"
                type="radio" 
                name="rating" 
                value="2" 
                id="rating-2" 
                checked = {rating === 2}
                onChange = {() => dispatch({ type:"RATING", ratingValue:"2"})}
                />
                2 ★ & above
                </label>
            </div>
        </div>
    )
}