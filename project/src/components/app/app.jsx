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
        <Route path={AppRoute.ROOT} exact>
          <MainPage films={films} genre={genre} year={year}/>
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignInPage/>
        </Route>
        <Route path={AppRoute.MY_LIST} exact>
          <MyListPage films={films}/>
        </Route>
        <Route path={AppRoute.FILM} exact>
          <FilmPage/>
        </Route>
        <Route path={AppRoute.FILM_REVIEW} exact>
          <AddReviewPage films={films}/>
        </Route>
        <Route path={AppRoute.PLAYER} exact>
          <PlayerPage films={films}/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
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
