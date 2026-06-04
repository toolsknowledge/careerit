import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import Watches from "./Watches";
import Cart from "./Cart";

import CartProvider from "../CartContext";

const Master = () => {

    return (

        <CartProvider>

            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Dashboard />}>

                        <Route
                            index
                            element={<Navigate to="laptops" />}
                        />

                        <Route
                            path="laptops"
                            element={<Laptops />}
                        />

                        <Route
                            path="mobiles"
                            element={<Mobiles />}
                        />

                        <Route
                            path="watches"
                            element={<Watches />}
                        />

                        <Route
                            path="cart"
                            element={<Cart />}
                        />

                    </Route>

                </Routes>

            </BrowserRouter>

        </CartProvider>
    );
};

export default Master;