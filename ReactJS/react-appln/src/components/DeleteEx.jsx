import axios from "axios"
import { useEffect } from "react"
const DeleteEx = ()=>{
    const make_delete_call = async ()=>{
        const {data} = await axios.delete("https://dummyjson.com/products/1")
        console.log(data)
    }
    useEffect(()=>{
        make_delete_call()
    },[]);
    
    return(
        <>
        
        </>
    )
}
export default DeleteEx;