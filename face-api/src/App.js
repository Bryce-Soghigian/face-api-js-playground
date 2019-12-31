import React from 'react';
import logo from './logo.svg';
import objectDetectionSketch from './ObjectDetectionSketch';

import P5Wrapper from 'react-p5-wrapper';
import './App.css';

function App() {
  return (
    <div className="App">
        <P5Wrapper sketch={objectDetectionSketch} />
    </div>
  );
}

export default App;
