/* eslint-disable no-case-declarations */
import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

//ACTION TYPES
const ADD_RECIPE_NAME = "ADD_RECIPE_NAME";
const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

//ACTION CREATORS
let nextId = 0;

export const addRecipeName = name => {
  return {
    type: ADD_RECIPE_NAME,
    id: nextId++,
    name
  };
};
export const addIngredients = ingredients => {
    return {
        type: ADD_INGREDIENTS,
        ingredients
    }
};


const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE_NAME:
      return {...state, name: action.name};
    case ADD_INGREDIENTS:
        return {...state, igredients: action.ingredients}
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
