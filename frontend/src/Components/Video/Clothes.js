import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId, startSeconds = 10, endSeconds = 30 }) => {
  const opts = {
    height: '400', // Adjust height as needed
    width: '100%',
    playerVars: {
      autoplay: 1, // Autoplay the video
      start: startSeconds,
      end: endSeconds,
      controls: 0, // Hide player controls
      loop: 1, // Loop the video
      mute: 1, // Mute the video
      modestbranding: 1, // Hide YouTube logo
      showinfo: 0, // Hide video title and uploader information
      playlist: videoId // Required for looping
    }
  };

  return (
    <div className='video-responsive'>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
