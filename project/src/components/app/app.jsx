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

function App({genre, year}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <MainPage genre={genre} year={year}/>
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignInPage/>
        </Route>
        <Route path={AppRoute.MY_LIST} exact>
          <MyListPage/>
        </Route>
        <Route path={AppRoute.FILM} exact>
          <FilmPage/>
        </Route>
        <Route path={AppRoute.FILM_REVIEW} exact>
          <AddReviewPage/>
        </Route>
        <Route path={AppRoute.PLAYER} exact>
          <PlayerPage/>
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
};

export default App;
