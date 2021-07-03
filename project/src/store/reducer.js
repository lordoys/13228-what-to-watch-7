import {ActionType} from './action';
import films from '../mocks/films';
import {uniq} from 'lodash';

function getAllGenres() {
  return films.reduce((result, film) => {
    result.push(film.genre);
    return uniq(result);
  }, []);
}

const initialState = {
  genre: 'All genres',
  genres: getAllGenres(),
  similarList: [],
  films,
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
    case ActionType.GET_SIMILAR_LIST:
      return {
        ...state,
        similarList: films.filter((film) => (film.genre === action.payload)),
      };
    default:
      return state;
  }
};

export {reducer};
