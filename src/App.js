import React, { useState } from 'react'
import './App.css';
import Home from './pages/Home/index.js'
import YouTube from 'react-youtube';

function App() {
  const API = 'AIzaSyC0FcCo8sHAyVThSnjOuny03SoW4unJhcg'
  var URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${API}`

  const [videos, setVideos] = useState(JSON.parse(localStorage.getItem('videos')) || getVideoByTerm())


  function getVideoByTerm(q) {
    const type = 'video'
    const term = q
    const finalURL = `${URL}&q=${term}&type=${type}`

    fetch(finalURL)
      .then(res => res.json())
      .then(data => {
        setVideos(data)
        localStorage.setItem('videos', JSON.stringify(data))
      })

  }
  console.log(videos)

  function Example() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const _onReady = (e) => {
      e.target.stopVideo();
    }

    return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
  }


  return (
    <div className="App">
      <h1>Youbook</h1>
      <Home />
      <Example />
    </div>
  );
}

export default App;
