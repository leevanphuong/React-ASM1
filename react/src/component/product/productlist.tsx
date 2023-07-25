import React,{useContext,useEffect} from 'react'
import { ProductContext } from '../../context/productContext'
import Button from '../Button/Index'
import { instance } from '../../axios/instance'

const Productlist = () => {
    const {state, dispatch} = useContext(ProductContext)
        useEffect(()=>{
            const fecthApi = async ()=>{
                try {
                    const {data} = await instance.get('/products')
                    dispatch({type:"fecth", payload:data})
                } catch (error) {
                    console.log(error)
                }
            }
            fecthApi()
        },[])
        const removeProduct= async (id: any)=>{
            try {
                await instance.delete('/products/' +id)
                dispatch({type:"delete", payload:id})
            } catch (error) {
                console.log(error)
            }
        }
        const addProduct= async (product: any)=>{
            try {
               const {data} = await instance.post('/products', product)
                dispatch({type:"addproduct", payload:data})
            } catch (error) {
                console.log(error)
            }
        }
        const UpdateProduct= async (product: any)=>{
            try {
                const {data}= await instance.put(`/products/${product.id}`, product)
                dispatch({type:"update", payload:data})
            } catch (error) {
                console.log(error)
            }
        }
  return (
    <div>
    {state?.products.map((item: any) => (
      <div key={item.id}>
        {item.name}
        <br />
        <Button onClick={() => removeProduct(item.id)}>Xoa</Button>
      </div>
    ))}
        <br/>
        <Button onClick={()=>addProduct({name: "product c"}) }>Addproduct</Button>
        <br />
        <Button onClick={()=>UpdateProduct({name: "product c update", id: 2}) }>Update product</Button>
  </div>
  )
}

export default Productlist