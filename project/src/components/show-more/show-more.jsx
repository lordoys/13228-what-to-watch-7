import React from 'react';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function ShowMore({increaseCount}) {
  function showMore() {
    increaseCount();
  }

  return (
    <div className="catalog__more">
      <button onClick={showMore} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  increaseCount() {
    dispatch(ActionCreator.increaseCount());
  },
});

ShowMore.propTypes = {
  increaseCount: PropTypes.func,
};

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
