export const filterReducer = (state, action) => {
    // console.log(action.type, action.priceValue)
    switch(action.type){
        case "LOW_TO_HIGH":
            return {
                ...state,
                sortBy: action.type
            };
        case "HIGH_TO_LOW":
            return {
                ...state,
                sortBy: action.type
            };
        case "RATING":
                if (action.ratingValue === "4"){
                    return {
                        ...state,
                        rating : 4
                    }}
                else if (action.ratingValue === "3") {
                    return {
                        ...state,
                        rating: 3
                    }}
                else if (action.ratingValue === "2") {
                    return {
                        ...state,
                        rating: 2
                    }
                }
        case "CATEGORY":
            if (action.categoryValue === "Bats"){
                return {
                    ...state,
                    categories : {
                        ...state['categories'],
                        bats: !state.categories.bats
                    }
                }}
            if (action.categoryValue === "Balls") {
                return {
                    ...state,
                   categories: {
                       ...state['categories'],
                       balls: !state.categories.balls
                   }
                }}
            if (action.categoryValue === "Pads"){
                return {
                    ...state,
                    categories : {
                        ...state['categories'],
                        pads: !state.categories.pads
                    }
                }}
            if (action.categoryValue === "Gloves"){
                return {
                    ...state,
                    categories : {
                        ...state['categories'],
                        gloves: !state.categories.gloves
                    }
                }}
        case "PRICERANGE":
            console.log(action.priceValue)
            return {
                ...state,
                price: action.priceValue
            };
                   
        default:
            return state;
    }
}