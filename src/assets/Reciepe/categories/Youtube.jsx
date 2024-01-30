import React from 'react';
import YouTube from 'react-youtube';


class Youtube extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playeVideo();
  }

  _onError(event) {
 
    const fallbackImageUrl = 'http://www.themealdb.com/images/ingredients/onion.png';

    if (event.data === 101) { 
      if (event.target.a) {
        event.target.a.src = fallbackImageUrl;
      }
    }
  }


  render() {

    const { id, width} = this.props;

    const opts = {
      width: (width > 800) ? "660" : width ,
      height: (width > 800) ? "440" : width - (width * (1 / 3)),
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    console.log(id)

    return (
      <div>
        <YouTube videoId={id} opts={opts} onReady={this._onReady} onError={this._onError} />
      </div>
    );
  }
}

export default Youtube;
