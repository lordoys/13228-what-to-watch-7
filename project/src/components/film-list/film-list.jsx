import React from 'react';
import FilmCard from '../film-card/film-card';
import filmsProp from '../../props/films.prop';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function FilmList({films, genre}) {
  return (
    <div className="catalog__films-list">
      {(genre && genre !== 'All genres') ?
        films.filter((film) => film.genre === genre).map((item) => <FilmCard key={item.id} film={item}/>) :
        films.map((item) => <FilmCard key={item.id} film={item}/>)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  films: state.films,
});

FilmList.propTypes = {
  films: filmsProp,
  genre: PropTypes.string,
};

export {FilmList};
export default connect(mapStateToProps)(FilmList);
