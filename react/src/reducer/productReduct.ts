import {produce} from 'immer'

const initialState: {products:[]}={
    products:[]
}
export const ProductReducer =(state = initialState as any, action: any)=>{
    return produce(state,(draftState: any)=>{
        switch (action.type){
            case "fecth":
                draftState.products = action.payload
                break;
            case "addproduct":
                draftState.products.push(action.payload)
                break;
            case "update":
                const product = action.payload
                draftState.products = state.products.map((item:any)=> item.id === product.id ? product : item)
                break;
            case "delete":
                const id = action.payload
                state.products = state.products.filter((item: any)=> item.id !== id)
                break;
            default:
                return state
        }
    })
}