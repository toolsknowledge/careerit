import { Link,Outlet } from "react-router-dom";
const Laptops = ()=>{
    return(
        <>
            <h1>Laptops Info Soon...!</h1>
            <br></br>
            <Link to="laptops/dell" style={{marginRight:200}}>Dell</Link>
            <Link to="laptops/hp">Hp</Link>
            
            <br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Laptops;