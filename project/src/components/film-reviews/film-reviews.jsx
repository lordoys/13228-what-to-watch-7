import React from 'react';
import reviewsProp from '../../props/reviews.prop';
import filmProp from '../../props/film.prop';

function FilmReviews({reviews, film}) {
  function getReviewsForCurrentFilm(list) {
    return list.filter((review) => review.id === Number(film.id));
  }

  function getEven(list) {
    return getReviewsForCurrentFilm(list).filter((e,i)=>!(i%2));
  }

  function getOdd(list) {
    return getReviewsForCurrentFilm(list).filter((e,i)=>(i%2));
  }

  function renderReview(review, index) {
    return (
      <div key={String(index)} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{review.user}</cite>
            <time className="review__date" dateTime="2016-12-24">{review.date}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {getEven(reviews).map((review, index) => renderReview(review, index))}
      </div>
      <div className="film-card__reviews-col">
        {getOdd(reviews).map((review, index) => renderReview(review, index))}
      </div>
    </div>
  );
}

FilmReviews.propTypes = {
  reviews: reviewsProp,
  film: filmProp,
};

export default FilmReviews;
