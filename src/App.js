import React from 'react';
import './App.css';
import WeatherApp from './WeatherApp';
import GithubSearch from './GithubSearch'

function App() {
  return (
    <div className="APP">
      <WeatherApp></WeatherApp>
      <hr/>
      <GithubSearch></GithubSearch>
    </div>
  );
}

export default App;
