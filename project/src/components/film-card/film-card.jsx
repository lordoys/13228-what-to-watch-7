import React from 'react';
import PropTypes from 'prop-types';

function FilmCard({films}) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={'film-page.html'}>Fantastic Beasts: The Crimes of Grindelwald</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmCard;
