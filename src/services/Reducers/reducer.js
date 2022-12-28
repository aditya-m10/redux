import { ADD_TO_CART } from "../Constants";
const intialstate={
    productData:[]
}
export default function cardItems(state=intialstate,action){
    switch (action.type){
        case ADD_TO_CART:
            return [
                ...state,
                {productData:action.data}
            ]
        default:
            return state
    } 
}