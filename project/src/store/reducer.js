import {ActionType} from './action';
import films from '../mocks/films';
import {uniq} from 'lodash';
const defaultCount = 8;

const initialState = {
  genre: 'All genres',
  genres: getAllGenres(),
  similarList: [],
  films: getSortedFilmList(films, 'All genres'),
  count: defaultCount,
};

function getAllGenres() {
  return films.reduce((result, film) => {
    result.push(film.genre);
    return uniq(result);
  }, []);
}

function getSortedFilmList(filmList, genre) {
  if (genre === 'All genres') {
    return filmList;
  } else {
    return filmList.filter((film) => film.genre === genre);
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
        count: defaultCount,
        films: getSortedFilmList(films, action.payload),
      };
    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
      };
    case ActionType.GET_SIMILAR_LIST:
      return {
        ...state,
        similarList: getSortedFilmList(films, action.payload),
      };
    case ActionType.RESET_COUNT:
      return {
        ...state,
        count: defaultCount,
      };
    case ActionType.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + defaultCount,
        films: getSortedFilmList(films, state.genre),
      };
    default:
      return state;
  }
};

export {reducer};
