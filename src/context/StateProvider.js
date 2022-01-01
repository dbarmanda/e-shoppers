//setup data Layer
//we need this to track "state"

import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children}) => (
      <StateContext.Provider
           value={useReducer(reducer,initialState)}>
               {children}
      </StateContext.Provider> 
);

//This is how we use state inside component..
export const useStateValue = () =>{
      useContext(StateContext);
}