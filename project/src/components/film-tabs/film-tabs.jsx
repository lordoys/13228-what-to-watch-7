import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../routes';
import filmProp from '../../props/film.prop';
import PropTypes from 'prop-types';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

function FilmTabs({film, match}) {
  const currentTab = match.params.tab;
  let content;

  if (currentTab === 'overview') {
    content = <FilmOverview film={film} />;
  } else if (currentTab === 'details') {
    content = <FilmDetails film={film} />;
  } else {
    content = <FilmReviews />;
  }

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

      {content}
    </div>
  );
}

FilmTabs.propTypes = {
  film: filmProp,
  match: PropTypes.object,
};

export default FilmTabs;
