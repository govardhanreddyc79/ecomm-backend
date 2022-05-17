import { useFilter } from "context";

export const SortBy = () => {
    const { state, dispatch } = useFilter();
    const { sortBy } = state
    return (
        <div>

        <h3 className="margin-top filter-segment">Sort By</h3>
            <div className="flex-column element-spacing">
                
            <label className="category-labels">
                <input
                    type="radio" 
                    name="sort-by" 
                    id="low-to-high"
                    className="margin-r"
                    checked={sortBy === "LOW_TO_HIGH"}
                    onChange = {() => dispatch({ type: "LOW_TO_HIGH" })}
                    />
                    Price - Low to High
                    </label>
            <label className="category-labels">
                <input
                type="radio"
                name="sort-by" 
                id="high-to-low"
                className="margin-r"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange = {() => dispatch({ type: "HIGH_TO_LOW" })}
                />
                Price - High to Low
                </label>

            </div>          
        </div>
    )
}