import React from 'react';
import PropTypes from 'prop-types';

const FilmVideo = React.forwardRef(({poster, src}, videoRef) => {
  const videoSize = {
    width: '280',
    height: '175',
  };

  return <video ref={videoRef} muted poster={poster} src={src} width={videoSize.width} height={videoSize.height} preload='none'/>;
});

FilmVideo.displayName = 'FilmVideo';
FilmVideo.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string,
};

export default FilmVideo;
