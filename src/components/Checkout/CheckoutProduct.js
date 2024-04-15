import React, { useContext } from "react";
import ShoppingContext from "../../context/Shopping/shoppingContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, rating, title, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="" />
      <div className="checkout_product_info">
        <p className="checkout_product_rating">{title}</p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key= {i}> ⭐ </p>
            ))}
        </div>
        <p className="checkout_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;