import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {

        const exists =
            cartItems.find(
                item => item.pid === product.pid
            );

        if (exists) {

            setCartItems(
                cartItems.map(item =>
                    item.pid === product.pid
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
            );

        } else {

            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity: 1
                }
            ]);
        }
    };

    const removeFromCart = (pid) => {

        setCartItems(
            cartItems.filter(
                item => item.pid !== pid
            )
        );
    };

    const increaseQty = (pid) => {

        setCartItems(
            cartItems.map(item =>
                item.pid === pid
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };

    const decreaseQty = (pid) => {

        setCartItems(
            cartItems
                .map(item =>
                    item.pid === pid
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;