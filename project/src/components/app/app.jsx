import React from 'react';
import MainPage from '../main-page/main-page';
import SignInPage from '../signIn-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App({films, genre, year}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact
          render={(props) => (
            <MainPage {...props} films={films} genre={genre} year={year}/>
          )}
        />
        <Route path={AppRoute.LOGIN} exact
          render={(props) => (
            <SignInPage {...props}/>
          )}
        />
        <Route path={AppRoute.MY_LIST} exact
          render={(props) => (
            <MyListPage {...props} films={films}/>
          )}
        />
        <Route path={AppRoute.FILM} exact
          render={(props) => (
            <FilmPage {...props} films={films}/>
          )}
        />
        <Route path={AppRoute.FILM_REVIEW} exact
          render={(props) => (
            <AddReviewPage {...props} films={films}/>
          )}
        />
        <Route path={AppRoute.PLAYER} exact
          render={(props) => (
            <PlayerPage {...props} films={films}/>
          )}
        />
        <Route
          render={() => (
            <NotFoundPage/>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;
