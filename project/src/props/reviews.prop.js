import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string,
    date: PropTypes.string,
  })
);
