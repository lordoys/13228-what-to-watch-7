import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import filmProp from '../../props/film.prop';
import {AppRoute} from '../../routes';
import FilmVideo from '../film-video/film-video';

function FilmCard({film}) {
  const history = useHistory();

  function handleClick() {
    history.push(AppRoute.ROOT);
  }

  return (
    <article  className="small-film-card catalog__films-card">
      <FilmVideo src={film.previewVideoLink} poster={`img/${film.previewImage}`}/>
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
