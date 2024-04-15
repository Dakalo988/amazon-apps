import React, { useContext } from "react";
import { useHistory} from 'react-router-dom'
import CurrencyFormat from "react-currency-format";
import ShoppingContext from "../../context/Shopping/shoppingContext";
import "./Subtotal.css";

const Subtotal = () => {
  const history = useHistory(); 
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length}
              items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <div className="subtotal_button">
      <botton onClick={e => history.push('/payment')}>Proceed to Checkout</botton>
      </div>
    </div>

   
  );
};

export default Subtotal;