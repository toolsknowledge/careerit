import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import Watches from "./Watches";
import CartProvider from "../CartContext"
const Master = () => {
  return (
    <CartProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="laptops" />} />

            <Route path="laptops" element={<Laptops />} />
            <Route path="mobiles" element={<Mobiles />} />
            <Route path="watches" element={<Watches />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </CartProvider>
  );
};

export default Master;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Laptops from "./Laptops";
// import Mobiles from "./Mobiles";
// import Watches from "./Watches";

// const Master = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />}>
//           <Route path="laptops" element={<Laptops />} />
//           <Route path="mobiles" element={<Mobiles />} />
//           <Route path="watches" element={<Watches />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Master;




// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Laptops from "./Laptops";
// import Mobiles from "./Mobiles";
// import Watches from "./Watches";

// const Master = ()=>{
//     return(
//         <>
//             <BrowserRouter>
//                 <Link to={"/dashboard"}>Dashboard</Link>
//                 <Routes>
//                     <Route path="/dashboard" element={<Dashboard></Dashboard>}>
//                         <Route path="dashboard/laptops" element={<Laptops></Laptops>}></Route>
//                         <Route path="dashboard/mobiles" element={<Mobiles></Mobiles>}></Route>
//                         <Route path="dashboard/watches" element={<Watches></Watches>}></Route>
//                     </Route>    
//                 </Routes> 
//             </BrowserRouter>
//         </>
//     )
// }
// export default Master;