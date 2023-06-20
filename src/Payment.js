import React , {useState,useEffect} from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";
import { Link , useHistory } from "react-router-dom"; 
import { CardElement , useStripe , useElements } from "@stripe/react-stripe-js"; 
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {


  const [{ basket, user }] = useStateValue(); // ,dispatch removed
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded,setSucceeded] = useState(false);
  const [processing,setProcessing] = useState("");
  const [error,setError] = useState(null);
  const [disabled,setDisabled] = useState(true);
  const [clientSecret,setClientSecret] = useState(true);
  

  useEffect(() => {
    // generate the speccial stripe secret which allows to charge a customer

    const getClientSecret = async () => {
        const response = await axios({
          method : 'post',
          //stripe expects the total in currencies subunits
          url : '/payments/create?total=${getBasketTotal(basket) * 100}'
        });
        setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  },[basket])

  const handleSubmit = async (event) => {
    //all fancy elements
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      //paymentIntent = payment confirmation 
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      history.replace('/orders');
    })
  }

  const handleChange = event => {
    // listen for changes in card element and display the errors as customer types their card details
     setDisabled(event.empty);
     setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/Checkout">{basket?.length} items </Link>)
        </h1>
        {/*Payment section -->  Delivery Details*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : "Guest"} </p>
            <p>BK-23 , saltlake</p>
            <p>Kolkata - 700 102 , West Bengal ,India </p>
          </div>
        </div>

        {/*Payment section -->  Review items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery </h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*Payment section -->  Payment method*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            {/*stripe magic code*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                      <h3>
                        Order total ({basket.length} items):{" "}
                        <strong>{value}</strong>
                      </h3>
                  )}
                  decimalScale={2} //price till 2 decimal places
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
