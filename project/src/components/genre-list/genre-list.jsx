import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../routes';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function GenreList({genres, changeGenre}) {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link onClick={() => {changeGenre('All genres')}} className="catalog__genres-link" to={AppRoute.ROOT}>All genres</Link>
      </li>
      {genres.map((item) => (
        <li key={item} className="catalog__genres-item">
          <Link onClick={() => {changeGenre(item)}} className="catalog__genres-link" to={AppRoute.ROOT}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(number) {
    dispatch(ActionCreator.changeGenre(number));
  },
});

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  changeGenre: PropTypes.func,
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
