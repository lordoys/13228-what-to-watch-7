import React, {useRef} from 'react';
import PropTypes from 'prop-types';

function FilmVideo({poster, src}) {
  const videoSize = {
    width: '280',
    height: '175',
  };
  const videoRef = useRef(null);
  let waitingPlay;

  function handleMouseEnter() {
    waitingPlay = setTimeout(() => videoRef.current.play(), 1000);
  }

  function handleMouseLeave() {
    clearTimeout(waitingPlay);
    videoRef.current.load();
  }

  return <video ref={videoRef} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}  muted poster={poster} src={src} width={videoSize.width} height={videoSize.height} preload='none'/>;
}

FilmVideo.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string,
};

export default FilmVideo;
