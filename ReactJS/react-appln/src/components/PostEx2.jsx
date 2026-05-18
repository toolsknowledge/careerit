import axios from "axios";
import { useRef,useState } from "react";
const PostEx2 = ()=>{
    const ref1 = useRef("");
    const ref2 = useRef("");
    
    const post_ex = async ()=>{
        const {data} = await axios.post("https://reqres.in/api/login",{
            "email":ref1.current.value,
            "password":ref2.current.value
        },{
            headers:{
                "Content-Type": "application/json",
            }
        });
        console.log(data);
    }
    
    
    
    return(
        <>
            <fieldset>
                <legend>POSTExample</legend>
                <input type="email" ref={ref1} placeholder="enter email"></input>
                <br></br><br></br>
                <input type="password" ref={ref2} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={post_ex}>Login</button>
            </fieldset>
        </>
    )
}
export default PostEx2;