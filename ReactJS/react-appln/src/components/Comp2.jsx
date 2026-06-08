import context from "../context/context";
import { useContext } from "react";
const Comp2 = ()=>{
    const data = useContext(context);
    return(
        <>
            <h1>{data}</h1>
        </>
    )
}
export default Comp2;