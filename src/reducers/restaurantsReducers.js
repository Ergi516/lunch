import axios from 'axios'
import { GET_RESTAURANTS } from '../constants/actionTypes'

const initialState = [];



export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_RESTAURANTS}_FULFILLED`:
      return [...action.payload.data.restaurants];
    default:
      return [...state];
  }
};

export const getRestaurants = () => ({
  type: GET_RESTAURANTS,
  payload: axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
});
