import {ActionType} from './action';
import films from '../mocks/films';
import {uniq} from 'lodash';

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
    default:
      return state;
  }
};

export {reducer};
