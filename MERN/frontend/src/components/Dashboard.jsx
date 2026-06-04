import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Dashboard = () => {

    const navigate = useNavigate();

    const { cartItems } =
        useContext(CartContext);

    const cartCount =
        cartItems.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );

    return (
        <>
            <nav className="navbar">

                <div className="logo">
                    🛒 ShopHub
                </div>

                <div className="menu">

                    <NavLink to="/laptops">
                        Laptops
                    </NavLink>

                    <NavLink to="/mobiles">
                        Mobiles
                    </NavLink>

                    <NavLink to="/watches">
                        Watches
                    </NavLink>

                </div>

                <div
                    className="cart"
                    onClick={() => navigate("/cart")}
                >
                    🛍️ Cart

                    <span className="cart-count">
                        {cartCount}
                    </span>
                </div>

            </nav>

            <Outlet />
        </>
    );
};

export default Dashboard;