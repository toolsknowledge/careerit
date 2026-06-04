import { useContext } from "react";
import axios from "axios";
import { CartContext } from "../CartContext";
import "./Styles.css";

const Cart = () => {

    const {
        cartItems,
        increaseQty,
        decreaseQty,
        removeFromCart
    } = useContext(CartContext);

    const totalAmount = cartItems.reduce(
        (sum, item) =>
            sum + (item.pcost * item.quantity),
        0
    );

    const handlePayment = async () => {

        try {

            if (cartItems.length === 0) {
                alert("Cart is empty");
                return;
            }

            const { data: order } = await axios.post(
                "http://localhost:9090/api/payment/create-order",
                {
                    amount: totalAmount
                }
            );

            const options = {

                key:
                    import.meta.env.VITE_RAZORPAY_KEY,

                amount:
                    order.amount,

                currency:
                    order.currency,

                order_id:
                    order.id,

                name:
                    "ShopHub",

                description:
                    "Shopping Cart Payment",

                handler: function (response) {

                    console.log(
                        "Payment Success",
                        response
                    );

                    alert(
                        "Payment Successful"
                    );

                    
                },

                prefill: {
                    name: "CareerIT",
                    email: "customer@gmail.com",
                    contact: "12345"
                },

                theme: {
                    color: "#2563eb"
                }
            };

            const razorpay =
                new window.Razorpay(options);

            razorpay.open();

        } catch (error) {

            console.error(error);

            alert(
                "Unable to initiate payment"
            );
        }
    };

    return (

        <div className="cart-page">

            <h1>Shopping Cart</h1>

            {
                cartItems.length === 0 ? (

                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "50px"
                        }}
                    >
                        <h2>
                            Your Cart Is Empty
                        </h2>
                    </div>

                ) : (

                    <>
                        {
                            cartItems.map(item => (

                                <div
                                    className="cart-row"
                                    key={item.pid}
                                >

                                    <img
                                        src={item.pimg}
                                        alt={item.pname}
                                    />

                                    <div className="cart-details">

                                        <h3>
                                            {item.pname}
                                        </h3>

                                        <p>
                                            Product Id :
                                            {item.pid}
                                        </p>

                                        <p>
                                            Price :
                                            ₹{item.pcost}
                                        </p>

                                        <div className="qty-controls">

                                            <button
                                                onClick={() =>
                                                    decreaseQty(
                                                        item.pid
                                                    )
                                                }
                                            >
                                                -
                                            </button>

                                            <span>
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQty(
                                                        item.pid
                                                    )
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                        <button
                                            className="remove-btn"
                                            onClick={() =>
                                                removeFromCart(
                                                    item.pid
                                                )
                                            }
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))
                        }

                        <div className="cart-summary">

                            <h2>
                                Total Amount :
                                ₹ {totalAmount}
                            </h2>

                            <button
                                className="checkout-btn"
                                onClick={handlePayment}
                            >
                                Proceed To Payment
                            </button>

                        </div>

                    </>
                )
            }

        </div>
    );
};

export default Cart;