import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {

    const exists = cartItems.find(
      item => item.pid === product.pid
    );

    if(exists){

      const updated = cartItems.map(item =>
        item.pid === product.pid
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updated);

    }else{

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity:1
        }
      ]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;