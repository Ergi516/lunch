import * as types from '../constants/actionTypes'

export const toggleDetail = bool => ({
  type: types.TOGGLE_DETAIL,
  payload: bool,
});

export const toggleFullMap = bool => ({
  type: types.TOGGLE_FULL_MAP,
  payload: bool,
});

export const changeRoute = page => ({
  type: types.CHANGE_ROUTE,
  payload: page,
});

export const changeRestaurant = restaurant => ({
  type: types.CHANGE_RESTAURANT,
  payload: restaurant,
});
