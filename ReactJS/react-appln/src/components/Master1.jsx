import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Laptops from "./Laptops.jsx";
import Mobiles from "./Mobiles.jsx";
import Dell from "./Dell.jsx";
import Hp from "./Hp.jsx";
const Master1 = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to={"/laptops"} style={{marginRight:200}}>
                    laptops
                </Link>
                <Link to={"/mobiles"} style={{marginRight:200}}>
                    mobiles
                </Link>
                <Routes>
                    <Route path="/laptops" element={<Laptops></Laptops>}>
                        <Route path="laptops/dell" element={<Dell></Dell>}></Route>
                        <Route path="laptops/hp" element={<Hp></Hp>}></Route>
                    </Route>


                    <Route path="/mobiles" element={<Mobiles></Mobiles>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master1;