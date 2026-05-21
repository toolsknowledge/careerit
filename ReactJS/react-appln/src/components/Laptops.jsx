import { Link,Outlet,useParams } from "react-router-dom";
const Laptops = ()=>{
    const {pid,pname,pcost} = useParams();
    return(
        <>
            <h1>{pid}...{pname}...{pcost}</h1>
            <br></br>
            <Link to="laptops/dell" style={{marginRight:200}}>Dell</Link>
            <Link to="laptops/hp/2/gen12/100000">Hp</Link>
            
            <br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Laptops;