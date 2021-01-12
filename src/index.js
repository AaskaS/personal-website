import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import School from './School/School';
import Work from './Work/Work';
import Projects from './Projects/Projects';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="App-header">
        <Router>

          <div >
            <ul id="nav">

              <li><Link to="/">About</Link></li>
              <li><Link to="/school">School</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/projects">Projects</Link></li>

            </ul>
          </div>



          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/school' component={School}></Route>
            <Route exact path='/work' component={Work}></Route>
            <Route exact path='/projects' component={Projects}></Route>
          </Switch>


        </Router>

        <div className="icons">
                   <a href="https://www.github.com/AaskaS"><FontAwesomeIcon icon={faGithub} size="2x" className="icon"></FontAwesomeIcon></a>
                  <a href="https://www.linkedin.com/in/aaska-shah"><FontAwesomeIcon icon={faLinkedin} size="2x" className="icon"></FontAwesomeIcon></a>
   
   
                </div>
        
      </div>
    );
  }
}



render(<App />, document.getElementById("root"));

/*<footer>Logos made using https://my.logomakr.com
        </footer>
ReactDOM.render(
  <React.StrictMode>
    
  <FontAwesomeIcon icon={faGithub} size="2x" className="icon" onClick={event =>  window.location.href='https://www.github.com/AaskaS'} />
                   <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" onClick={event =>  window.location.href='https://www.linkedin.com/in/aaska-shah'} />
                
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*
 <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/" /> 
                    )
                }}
              />


constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }



<Route
                exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/home" /> :
                      <Redirect to="/test1" /> 
                    )
                }}
              />

*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
