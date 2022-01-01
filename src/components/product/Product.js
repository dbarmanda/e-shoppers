import React from "react";
import "./product.css";
// import ReactStars from "react-rating-stars-component";

//redux manipulation imports
import { useDispatch } from "react-redux";
import { selectBasket } from "../../features/basketSlice";

import {addToBasket} from "../../features/basketSlice";
import { useSelector } from "react-redux";
import { Rating } from "@mui/material";
import ReactStars from "react-rating-stars-component";

import { Link } from "react-router-dom";

function Product(props) {
  const { id, title, price, rating, image } = props;

  //manipulating redux state
   const dispatch = useDispatch();

   const basket = useSelector(selectBasket);

   const addToKart = ()=>{
     dispatch(
       addToBasket({id, title, price, rating, image})
     )
   }


  return (
    <Link className="product" to={id}>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
        {/* <ReactStars name="half-rating-read" value={rating} precision={0.5} readOnly /> */}
        <ReactStars edit={false} value={rating} isHalf={true} size={window.innerWidth < 600 ? 20: 25} /> <span>(234 reviews)</span>
        </div>
      </div>

      <img src={image} alt="product" />
      <button onClick={addToKart}>Add to Basket</button>
    </Link>
  );
}

export default Product;
