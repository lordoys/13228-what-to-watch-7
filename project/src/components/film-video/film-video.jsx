import React from 'react';
import PropTypes from 'prop-types';

function FilmVideo({poster, src}) {
  return <video  muted poster={poster} src={src} width="280" height="175"/>;
}

FilmVideo.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string,
};

export default FilmVideo;
