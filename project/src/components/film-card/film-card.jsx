import React, {useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import filmProp from '../../props/film.prop';
import {AppRoute} from '../../routes';
import FilmVideo from '../film-video/film-video';

function FilmCard({film}) {
  const history = useHistory();
  const videoRef = useRef(null);
  let waitingPlay;

  function handleClick() {
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

FilmCard.propTypes = {
  film: filmProp,
};

export default FilmCard;
