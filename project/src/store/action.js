export const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  GET_FILMS_BY_GENRE: 'getFilmsByGenre',
};

export const ActionCreator = {
  changeGenre: () => ({
    type: ActionType.CHANGE_GENRE,
  }),
  getFilmsByGenre: () => ({
    type: ActionType.GET_FILMS_BY_GENRE,
  }),
};
