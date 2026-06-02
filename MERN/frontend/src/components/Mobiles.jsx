import { useEffect, useState } from "react"
import "./Styles.css"
import axios from "axios"
import { useContext } from "react";
import { CartContext } from "../CartContext";
const Mobiles = ()=>{
    const { addToCart } = useContext(CartContext);
    const [res,setRes] = useState([])
    const make_api_call = async ()=>{
        const {data} = await axios.get("http://localhost:9090/mobiles")
        setRes(data);
    }
   
    useEffect(()=>{
        make_api_call()
    },[]);

    return(
        <>
           <div className="product-grid">
{
res.map((item)=>(
    <div className="product-card" key={item.pid}>

        <img
          src={item.pimg}
          alt={item.pname}
        />

        <div className="product-info">

          <h3>{item.pname}</h3>

          <p>{item.pid}</p>

          <h2>₹ {item.pcost}</h2>

          <button
            onClick={()=>addToCart(item)}
          >
            Add To Cart
          </button>

        </div>

    </div>
))
}
</div>
        </>
    )
}
export default Mobiles;
