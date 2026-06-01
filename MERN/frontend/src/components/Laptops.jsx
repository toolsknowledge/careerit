import { useEffect, useState } from "react"
import "./Styles.css"
import axios from "axios"
const Laptops = ()=>{
    const [res,setRes] = useState([])
    const make_api_call = async ()=>{
        const {data} = await axios.get("http://localhost:9090/laptops")
        setRes(data);
    }
   
    useEffect(()=>{
        make_api_call()
    },[]);

    return(
        <>
            <p>{JSON.stringify(res)}</p>
        </>
    )
}
export default Laptops;
