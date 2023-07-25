import {createContext, useReducer} from 'react'
import {produce} from 'immer'
import { ProductReducer } from '../reducer/productReduct'

export const ProductContext = createContext({} as any)
const initialState ={
    products: []
}


type Props = {
    children?: React.ReactNode
}


const ProductProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(produce(ProductReducer), initialState)
  return (
    <ProductContext.Provider value={{state, dispatch}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider