export const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  GET_FILMS_BY_GENRE: 'getFilmsByGenre',
  GET_SIMILAR_LIST: 'getSimilarList',
  RESET_COUNT: 'resetCount',
  INCREASE_COUNT: 'increaseCount',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: () => ({
    type: ActionType.GET_FILMS_BY_GENRE,
  }),
  getSimilarList: (genre) => ({
    type: ActionType.GET_SIMILAR_LIST,
    payload: genre,
  }),
  resetCount: () => ({
    type: ActionType.RESET_COUNT,
  }),
  increaseCount: () => ({
    type: ActionType.INCREASE_COUNT,
  }),
};
