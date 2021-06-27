import React from 'react';
import reviewsProp from '../../props/reviews.prop';
import filmProp from '../../props/film.prop';

function FilmReviews({reviews, film}) {
  function getReviewsForCurrentFilm(list) {
    const allReviews = list.filter((review) => review.id === Number(film.id));
    const addReviews = allReviews.filter((e,i)=>!(i%2));
    const evenReviews = allReviews.filter((e,i)=>(i%2));
    const result = [];

    if (addReviews) {
      result.push(addReviews);
    }

    if (evenReviews) {
      result.push(evenReviews);
    }

    return result;
  }

  return (
    <div className="film-card__reviews film-card__row">
      {getReviewsForCurrentFilm(reviews).map((column, index) => (
        <div key={index} className="film-card__reviews-col">
          {column.map((review, index) => (
            <div key={review.id + index} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{review.user}</cite>
                  <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{review.rating}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

FilmReviews.propTypes = {
  reviews: reviewsProp,
  film: filmProp,
};

export default FilmReviews;
