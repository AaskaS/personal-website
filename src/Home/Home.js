import React from 'react';
import logo from '../images/LogoText.png';
import learn from '../images/learnlow.png';
import './Home.css';
import About from './About';
import { Box } from '@material-ui/core';
import Typical from 'react-typical';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  render() {
    return (
      <div className="App-header" >


        {/*    <h1>Aaska Shah</h1> */}
        <img src={logo} className="App-logo" alt="logo" />

        <Typical
          steps={['', 1000, "Hi! I'm Aaska.", 500]}
          loop={1}
          wrapper="h2"
        />

        <p>I'm an aspiring Full Stack Developer. </p>


        <Box width={1 / 2} flexDirection="column" justifyContent="flex-center" flexWrap="nowrap">
          <p>I've recently graduated from McMaster University. I love spending my time on new programming projects, learning new skills, 
            reading, watching videos, and basically anything that will keep me busy at home.  </p>

        </Box>

        <button onClick={this._onButtonClick} style={{ visibility: this.state.showComponent ? 'hidden' : 'false' }}>
          <img src={learn} alt="learn more" className="learn-more" />
        </button>

        {this.state.showComponent ? <About /> : null}


      </div>



    );
  }
}



/*
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <div className="App">


          <header className="App-header">


            <div className="rectangle" >
            <img src={logo} className="App-logo" alt="logo" />
              <p>HELLOOO</p>

            </div>


          </header>

      </div>

*/


