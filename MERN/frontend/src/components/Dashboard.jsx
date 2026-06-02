import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Dashboard = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <>
      <nav className="navbar">

        <div className="logo">
          🛒 ShopHub
        </div>

        <div className="menu">
          <NavLink to="/laptops">Laptops</NavLink>
          <NavLink to="/mobiles">Mobiles</NavLink>
          <NavLink to="/watches">Watches</NavLink>
        </div>

        <div className="cart">
          🛍️ Cart

          <span className="cart-count">
            {
              cartItems.reduce(
                (total,item)=>total+item.quantity,
                0
              )
            }
          </span>

        </div>

      </nav>

      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;