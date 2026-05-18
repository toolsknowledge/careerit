import { useRef,useState } from "react";
import axios from "axios"
const PostEx1 = ()=>{
    const ref1 = useRef("");
    const ref2 = useRef("");
    const ref3 = useRef("");
    
    const [msg1,setMsg1] = useState("");
    const [msg2,setMsg2] = useState("");
    const [msg3,setMsg3] = useState("");
    const [id4,setId4] = useState("");

    const post_ex = async ()=>{
        const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts",{
            "name":ref1.current.value,
            "email":ref2.current.value,
            "course":ref3.current.value
        });
        const {name,email,course,id} = data;
        setMsg1(name);
        setMsg2(email);
        setMsg3(course);
        setId4(id);
    }
    
    
    return(
        <>
            <fieldset>
                <legend>AXIOS POST EXAMPLE</legend>
                <input type="text" ref={ref1} placeholder="enter name"></input>
                <br></br><br></br>
                <input type="email" ref={ref2} placeholder="enter email"></input>
                <br></br><br></br>
                <input type="text" ref={ref3} placeholder="enter course"></input>
                <br></br><br></br>
                <button onClick={post_ex}>Post</button>
                <hr></hr>
                <h1>{msg1}....{msg2}....{msg3}....{id4}</h1>
            </fieldset>
        </>
    )
}
export default PostEx1;