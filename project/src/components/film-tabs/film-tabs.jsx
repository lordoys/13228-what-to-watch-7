import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../routes';
import filmProp from '../../props/film.prop';
import reviewsProp from '../../props/reviews.prop';
import PropTypes from 'prop-types';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

function FilmTabs({film, match, reviews}) {
  const tabList = {
    'overview': FilmOverview,
    'details': FilmDetails,
    'reviews': FilmReviews,
  };
  const DynamicContent = tabList[match.params.tab];

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.keys(tabList).map((tab) => (
            <li key={tab} className={`film-nav__item ${tab === match.params.tab ? 'film-nav__item--active' : ''}`}>
              <Link className="film-nav__link" to={`${AppRoute.FILM_BASE_IRL}/${film.id}/${tab}`}>{tab[0].toUpperCase() + tab.slice(1)}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <DynamicContent film={film} reviews={reviews} />
    </div>
  );
}

FilmTabs.propTypes = {
  film: filmProp,
  reviews: reviewsProp,
  match: PropTypes.shape({
      params: PropTypes.shape({
          tab: PropTypes.string,
        })
    }),
};

export default FilmTabs;
