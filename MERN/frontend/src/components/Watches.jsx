import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { CartContext } from "../CartContext";

const Watches = () => {

    const [res, setRes] = useState([]);

    const { addToCart } =
        useContext(CartContext);

    useEffect(() => {

        axios
            .get(
                "http://localhost:9090/watches"
            )
            .then(response =>
                setRes(response.data)
            );

    }, []);

    return (

        <div className="product-grid">

            {
                res.map(item => (

                    <div
                        className="product-card"
                        key={item.pid}
                    >

                        <img
                            src={item.pimg}
                            alt={item.pname}
                        />

                        <div className="product-info">

                            <h3>{item.pname}</h3>

                            <h2>
                                ₹ {item.pcost}
                            </h2>

                            <button
                                onClick={() =>
                                    addToCart(item)
                                }
                            >
                                Add To Cart
                            </button>

                        </div>

                    </div>

                ))
            }

        </div>
    );
};

export default Watches;