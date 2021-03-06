import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list';
import filmsProp from '../../props/films.prop';
import {AppRoute} from '../../routes';
import {Link} from 'react-router-dom';
import GenreList from '../genre-list/genre-list';
import {connect} from 'react-redux';
import ShowMore from '../show-more/show-more';
import {ActionCreator} from '../../store/action';

function MainPage({films, match, genre, year, genres, count, resetCount}) {
  useEffect(() => resetCount(), [resetCount]);

  function activeTab() {
    return match.params.genre ? match.params.genre[0].toUpperCase() + match.params.genre.slice(1) : '';
  }

  function visibleFilms() {
    return films.slice(0, count);
  }

  function hasShowMoreButton() {
    return films.length > count;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Link className="logo__link" to={AppRoute.ROOT}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

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

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList activeTab={activeTab()} genres={genres}/>
          <FilmList films={visibleFilms()}/>
          {hasShowMoreButton() && <ShowMore />}
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
            <p>?? 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  films: state.films,
  genres: state.genres,
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  resetCount() {
    dispatch(ActionCreator.resetCount());
  },
});

MainPage.propTypes = {
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.number.isRequired,
  films: filmsProp,
  count: PropTypes.number,
  resetCount: PropTypes.func,
  match: PropTypes.object,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
