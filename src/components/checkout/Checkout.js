import React from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../../features/basketSlice";
import "./checkout.css";
import ad from "./ad.jpg";
import CheckoutProduct from "../checkout-product/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";
function Checkout() {
  //instead of useState take 'state' from 'redux'
  const basket = useSelector(selectBasket);

  return (
    <div className="checkout">
        <div className="checkout_left">
      <img
        className="checkout_ad"
        src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/gtx-1650-super/en-strip-banner/geforce-gtx-1650-super-featured-strip-2560-dl@2x.jpg"
        alt=""
      />

      {basket.length === 0 ? (
        <div className="checkout_empty">
          <img
            className="checkout_emptyImage"
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            alt=""
          />
          <div className="checkout_emptyInfo">
            <h2>Your Eshop Basket is empty</h2>
            <small>Shop today's deals</small>
          </div>
        </div>
      ) : (
        <div className="checkout_cart">
          <h2 className="checkout_cartTitle">Your Eshopping Cart</h2>
          {/* Listing all the checkout products i.e. basket items  */}
          <hr />

          {basket.map((product)=>{
              return <CheckoutProduct 
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            price={product.price}
                            title={product.title}
                            rating={product.rating}
                        />;
          })}
        </div>
      )}
      </div>

          {basket.length > 0 && (
      <div className="checkout_right">
          <Subtotal/>
      </div>
          )}
    </div>
  );
}

export default Checkout;
