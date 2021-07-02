import React, {useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import filmProp from '../../props/film.prop';
import PropTypes from 'prop-types';
import {AppRoute} from '../../routes';
import FilmVideo from '../film-video/film-video';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function FilmCard({film, getSimilarList}) {
  const history = useHistory();
  const videoRef = useRef(null);
  let waitingPlay;

  function handleClick() {
    getSimilarList(film.genre);
    clearTimeout(waitingPlay);
    history.push(AppRoute.ROOT);
  }

  function handleMouseEnter() {
    waitingPlay = setTimeout(() => videoRef.current.play(), 1000);
  }

  function handleMouseLeave() {
    clearTimeout(waitingPlay);
    videoRef.current.load();
  }

  return (
    <article onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="small-film-card catalog__films-card">
      <FilmVideo src={film.previewVideoLink} poster={`img/${film.previewImage}`} ref={videoRef}/>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" onClick={handleClick} to={`${AppRoute.FILM_BASE_IRL}/${film.id}/overview`}>{film.name}</Link>
      </h3>
    </article>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getSimilarList(genre) {
    dispatch(ActionCreator.getSimilarList(genre));
  },
});

FilmCard.propTypes = {
  film: filmProp,
  getSimilarList: PropTypes.func,
};

export {FilmCard};
export default connect(null, mapDispatchToProps)(FilmCard);
