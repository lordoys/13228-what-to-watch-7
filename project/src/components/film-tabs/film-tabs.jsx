import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../routes';
import filmProp from '../../props/film.prop';
import PropTypes from 'prop-types';

function FilmTabs({film, match}) {
  const currentTab = match.params.tab;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${currentTab === 'overview' ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`${AppRoute.FILM_BASE_IRL}/${film.id}/overview`}>Overview</Link>
          </li>
          <li className={`film-nav__item ${currentTab === 'details' ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`${AppRoute.FILM_BASE_IRL}/${film.id}/details`}>Details</Link>
          </li>
          <li className={`film-nav__item ${currentTab === 'reviews' ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link" to={`${AppRoute.FILM_BASE_IRL}/${film.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring} and other</strong></p>
      </div>
    </div>
  );
}

FilmTabs.propTypes = {
  film: filmProp,
  match: PropTypes.object,
};

export default FilmTabs;
