import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { getBasketTotal, selectBasket } from '../../features/basketSlice'
function Subtotal() {
    const basket = useSelector(selectBasket);
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`Rs. ${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" name="" id="" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}/>
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
