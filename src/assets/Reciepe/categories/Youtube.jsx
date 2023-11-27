import React from 'react';
import YouTube from 'react-youtube';


class Youtube extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {

    const { id, additionalOpts } = this.props;

    const opts = {
      height: '390',
      width: '640',
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
