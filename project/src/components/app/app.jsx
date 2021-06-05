import React from 'react';
import MainPage from '../mainPage/mainPage';
import SignInPage from '../signInPage/signInPage';
import MyListPage from '../myListPage/myListPage';
import FilmPage from '../filmPage/filmPage';
import AddReviewPage from '../addReviewPage/addReviewPage';
import PlayerPage from '../playerPage/playerPage';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App({genre, year}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage genre={genre} year={year} />
        </Route>
        <Route path="/login" exact component={SignInPage} />
        <Route path="/mylist" exact component={MyListPage} />
        <Route path="/films/:id" exact component={FilmPage} />
        <Route path="/films/:id/review" exact component={AddReviewPage} />
        <Route path="/player/:id" exact component={PlayerPage} />
        <Route
          render={() => (
            <>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default App;
