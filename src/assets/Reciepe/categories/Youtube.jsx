import React from 'react';
import YouTube from 'react-youtube';


class Youtube extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {

    const { videoId, additionalOpts } = this.props;

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div>
        <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}

export default Youtube;
