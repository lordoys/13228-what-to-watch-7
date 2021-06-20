import React from 'react';
import filmsProp from '../../props/films.prop';
import {AppRoute} from '../../routes';
import {Link} from 'react-router-dom';

function MyListPage({films}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link className="logo__link" to={AppRoute.ROOT}>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map((film) => (
            <article key={film.id} className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={`${AppRoute.FILM_BASE_IRL}/${film.id}`}>{film.name}</Link>
              </h3>
            </article>
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link className="logo__link logo__link--light" to={AppRoute.ROOT}>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

MyListPage.propTypes = {
  films: filmsProp,
};

export default MyListPage;
