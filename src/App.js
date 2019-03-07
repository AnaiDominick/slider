import React, { Component } from 'react';
import './App.css';
import Slider from './components/slider/slider';
import Submit from './components/submit/submit';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     images: images
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <Submit />
        <Slider />
      </React.Fragment>
    )
  }


}

export default App;
