import { useRef } from "react";
import { useNavigate } from "react-router-dom"; 
const Login = ()=>{
    const ref1 = useRef();
    const ref2 = useRef();
    const navigate = useNavigate();
    const login_ex = ()=>{
        ref1.current.value == "admin" && ref2.current.value == "admin@123" ? 
        navigate("/dashboard"): navigate("/error");
    }
    return(
        <>
            <fieldset>
                <legend>LOGIN</legend>
                <input type="text" ref={ref1} placeholder="enter user name"></input>
                <br></br><br></br>
                <input type="password" ref={ref2} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login_ex}>Login</button>
            </fieldset>
        </>
    )
}
export default Login;