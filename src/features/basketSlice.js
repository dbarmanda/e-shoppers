import {  createSlice } from '@reduxjs/toolkit';



export const basketSlice = createSlice({
  name: 'basket',
  initialState : {
   basketList: [
     {
    id:"1cz2345",
    title:"BenQ MOBIUZ EX3415R 34-inch WQHD Ultrawide 1900R Curved Gaming Monitor, IPS, 21:9, 3440 x 1440, HDR400, 144Hz, 1ms, AMD FreeSync Premium, 98% DCI P3",
    price:999,
    rating: 3.2,
    image:"https://m.media-amazon.com/images/I/71zoG+wIxPL._AC_UY218_.jpg"
     },

     {
      id:"1fads2345",
      title:"BenQ MOBIUZ EX3415R 34-inch WQHD Ultrawide 1900R Curved Gaming Monitor, IPS, 21:9, 3440 x 1440, HDR400, 144Hz, 1ms, AMD FreeSync Premium, 98% DCI P3",
      price:999,
      rating: 3.2,
      image:"https://m.media-amazon.com/images/I/71zoG+wIxPL._AC_UY218_.jpg"
       }
   ]
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToBasket: (state, action) => {
      state.basketList.push(action.payload)
    },
    removeFromBasket: (state, action) => {
      console.log(action.payload);
            // let newBasket = {...state.basketList};
            // console.log(newBasket);


      state.basketList.splice(state.basketList.findIndex(e => e.id === action.payload),1);


              // const index = state.basketList.findIndex((basketItem)=>{
              //   return basketItem.id === action.payload
              // });
              // console.log(index);
              // if(index>=0){
              //   //remove item brother
              //   newBasket.splice(index, 1);
              //   state.basketList = newBasket;
              // } else {
              //   console.warn("item doesnot exist in our store, sorry sir/mam")
              // }
    },
   
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basketList;


export default basketSlice.reducer;

/******************************************* */
export const getBasketTotal = (basket) =>{
  //a function      var    basket iterate item
  return basket?.reduce((amount, item) => item.price + amount, 0);
}
/*********************************************** */
