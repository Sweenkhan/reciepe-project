import React from 'react';
import YouTube from 'react-youtube';


class Youtube extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
 


  render() {

    const { id, width} = this.props;

    const opts = {
      width: (width > 800) ? "660" : width ,
      height: (width > 800) ? "440" : width - (width * (1 / 3.3)),
      playerVars: { 
        autoplay: 1,
        origin: 'http://localhost:5173',
      },
    };

    console.log(id)

    return (
      <div>
        <YouTube videoId={id} opts={opts} onReady={this._onReady}  />
      </div>
    );
  }
}

export default Youtube;
