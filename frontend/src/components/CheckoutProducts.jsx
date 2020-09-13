import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
const CheckoutProducts = ({ id, title, rating, price, image, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct_image" alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        {hideButton ? null : (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProducts;
