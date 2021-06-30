import {ActionType} from './action';

const initialState = {
  genre: 'All genres',
  films: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.genre,
      };
    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export {reducer};
