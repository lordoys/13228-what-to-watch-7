import {ActionType} from './action';
import films from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
        films: action.payload === 'All genres' ? films : films.filter((film) => (film.genre === action.payload)),
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
