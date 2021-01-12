import React from 'react';
import logo from '../images/AaskaMac.png';
import club from '../images/learnlow.png';
import CSS from './CSS';
import './School.css';
import { Box, Button } from '@material-ui/core';




export default class School extends React.Component {
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
            <div className="App-header">
                {/*https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=212121&primary.text.color=4fc2f7&secondary.color=7986CB*/}
                <img src={logo} className="School-logo" alt="logo" />


                <Box width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap">

                    <p className="box" >I attended McMaster University to complete my undergrad in Computer Science while minoring in Economics.
	Although studying took up time, I still made time to take part in extracurricular activities: DeltaHacks, the Computer Science Society, and social events. Attending different events and being a part of clubs helped me further develop my teamwork skills and taught me a lot about event planning and coordinating projects. 
	My time at McMaster University lead me to new skills, friends, and experiences that cannot happen from just studying alone. </p>
                </Box>


                {/*  <Button onClick={() => this.setState({ isAboutVisible: true }) }>About</Button> <div onClick={this.renderClubs}> CSS </div>
                { this.state.isAboutVisible ? this.renderClubs : null } <button onClick={this.showAlert}>show alert</button> */}


                <div >
                    <button onClick={this._onButtonClick} style={{ visibility: this.state.showComponent ? 'hidden' : 'false' }}>
                        <img src={club} alt="learn more" className="School-clubs" />

                    </button>
                </div>
                {this.state.showComponent ? <CSS /> : null}

            </div>



        );
    }
}

/*

 <Box width={1 / 3} className="box1" >

                </Box>

*/