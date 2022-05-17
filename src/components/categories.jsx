import { useFilter } from "context";

export const Categories = () => {

    const { state, dispatch } = useFilter();
    const { categories} = state
    const { bats, balls, pads, gloves } = categories
    return (

        <div>
        <h3 className="margin-top filter-segment">Category</h3>
            <div className="flex-column element-spacing">
                <label className="category-labels">
                    <input 
                    className="margin-r"
                    type="checkbox" 
                    name="Bats"
                    id="bats"
                    checked = {bats} 
                    onChange = {() => dispatch({ type:"CATEGORY",categoryValue:"Bats"})}
                    />
                    Bats
                    </label>
                
                <label className="category-labels">
                    <input 
                    className="margin-r"
                    type="checkbox" 
                    name="Balls"
                    id="balls"
                    checked = {balls} 
                    onChange = {() => dispatch({ type:"CATEGORY",categoryValue:"Balls"})} 
                    />
                    Balls
                    </label>
                
                <label className="category-labels">
                    <input 
                    className="margin-r"
                    type="checkbox" 
                    name="Pads" 
                    id="pads"
                    checked = {pads} 
                    onChange = {() => dispatch({ type:"CATEGORY",categoryValue:"Pads"})}
                    />
                    Pads
                    </label>
                
                <label className="category-labels">
                    <input 
                    className="margin-r"
                    type="checkbox" 
                    name="Gloves" 
                    id="gloves"
                    checked = {gloves} 
                    onChange = {() => dispatch({ type:"CATEGORY",categoryValue:"Gloves"})}
                    />
                    Gloves
                    </label>
            </div>
         </div>
    )
}