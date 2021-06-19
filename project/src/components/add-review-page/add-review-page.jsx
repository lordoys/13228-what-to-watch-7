import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../comment-form/comment-form';
import filmsProp from '../../props/films.prop';
import {AppRoute} from "../../routes";
import {Link} from "react-router-dom";

function AddReviewPage({films, match}) {
  const id = match.params.id;
  const film = films[id - 1];
  const url = '#';

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={`img/${film.backgroundImage}`} alt={film.backgroundImage}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link className="logo__link" to={AppRoute.ROOT}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${AppRoute.FILM_BASE_IRL}/${film.id}`}>{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link" to={AppRoute.LOGIN}>Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={`img/${film.posterImage}`} alt={`img/${film.posterImage}`} width="218" height="327"/>
        </div>
      </div>
      <CommentForm />
    </section>
  );
}

AddReviewPage.propTypes = {
  films: filmsProp,
  match: PropTypes.object,
};

export default AddReviewPage;
