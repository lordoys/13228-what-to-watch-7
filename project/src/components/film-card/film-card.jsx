import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FilmCard({film, setCurrentFilm}) {
  const [movie] = useState(film);
  const link = '/films/' + film.id;

  return (
    <article className="small-film-card catalog__films-card">
      <div onMouseEnter={() => setCurrentFilm(movie)} className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={{pathname: link,}}>{movie.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  setCurrentFilm: PropTypes.func.isRequired,
};

export default FilmCard;
