import React from 'react';
import YouTube from 'react-youtube';


class Youtube extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  _onError(event) {
    console.error('Error initializing YouTube player:', event.data);
    // Set a fallback image
    event.target.a.src = 'http://www.themealdb.com/images/ingredients/onion.png';
  }

  render() {

    const { id} = this.props;

    const opts = {
      height: '390',
      width: '540',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    console.log(id)

    return (
      <div>
        <YouTube videoId={id} opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}

export default Youtube;
