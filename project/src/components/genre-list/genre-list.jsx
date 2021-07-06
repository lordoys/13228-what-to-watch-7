import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../routes';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function GenreList({genres, activeTab, changeGenre, genre}) {
  useEffect(() => {
    if(activeTab) {
      changeGenre(activeTab);
    }
  });

  function handleClick(event) {
    changeGenre(event.target.name);
  }

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${genre === 'All genres' ? 'catalog__genres-item--active' : ''}`}>
        <Link onClick={handleClick} name={'All genres'} className="catalog__genres-link" to={AppRoute.ROOT}>All genres</Link>
      </li>
      {genres.map((item) => (
        <li key={item} className={`catalog__genres-item ${genre === item ? 'catalog__genres-item--active' : ''}`}>
          <Link onClick={handleClick} name={item} className="catalog__genres-link" to={`${AppRoute.ROOT}sort/${item.toLowerCase()}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(targetGenre) {
    dispatch(ActionCreator.changeGenre(targetGenre));
  },
});

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  genre: PropTypes.string,
  changeGenre: PropTypes.func,
  activeTab: PropTypes.string,
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
