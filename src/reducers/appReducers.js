import { TOGGLE_DETAIL, TOGGLE_FULL_MAP,CHANGE_ROUTE, CHANGE_RESTAURANT } from '../constants/actionTypes'

const initialState = {
  showDetail: false,
  currentPage: 'lunch',
  currentRestaurant: {},
  showFullMap: false,
};



export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DETAIL:
      return { ...state, showDetail: typeof action.payload === 'boolean' ? action.payload : !state.showDetail };

    case TOGGLE_FULL_MAP:
      return { ...state, showFullMap: action.payload === false ? action.payload : !state.showFullMap };

    case CHANGE_ROUTE:
      return { ...state, currentPage: action.payload, showDetail: false };

    case CHANGE_RESTAURANT:
      return { ...state, currentRestaurant: action.payload };

    default:
      return { ...state };
  }
};

export const toggleDetail = bool => ({
  type: TOGGLE_DETAIL,
  payload: bool,
});

export const toggleFullMap = bool => ({
  type: TOGGLE_FULL_MAP,
  payload: bool,
});

export const changeRoute = page => ({
  type: CHANGE_ROUTE,
  payload: page,
});

export const changeRestaurant = restaurant => ({
  type: CHANGE_RESTAURANT,
  payload: restaurant,
});
