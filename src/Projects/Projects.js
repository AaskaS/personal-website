import React from 'react';
import logo from '../images/AaskaProject1.png';
import './Projects.css';
import { Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default class Projects extends React.Component {
    render() {
        return (
            <div className="header">
                {/*https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=212121&primary.text.color=4fc2f7&secondary.color=7986CB*/}
                <img src={logo} className="Project-logo" alt="logo" />


                <div className="Project-header" >
                    {/*    <h1>Aaska Shah</h1> https://github.com/AaskaS/SpringBootSQL*/}

                    <Box width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap">
                        <h5>Expense Tracker</h5>
                        <h6>AngularJS</h6>
                        <a href="https://github.com/AaskaS/ExpenseTracker"><FontAwesomeIcon icon={faGithub} size="1x" className="icon"></FontAwesomeIcon></a>
                        <p>Working on a simple web application that will allow the user to create an account, enter and store their transactions,
                        and see a visual breakdown of where they spend their money.</p></Box>

                    <Box width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap">
                        <h5>VRecon</h5>
                        <h6>VR, Unity, C#</h6>
                        <a href="https://github.com/AaskaS/zp18"><FontAwesomeIcon icon={faGithub} size="1x" className="icon"></FontAwesomeIcon></a>
                        <p className="special">Final year capstone project partnered with McMaster Decision Science Laboratory</p>
                        <p>Application of Virtual Reality in Experimental Economics aims to conduct controlled laboratory experiments to gain
                        insight into how people make decisions when a component of their overall health is affected. Hindrances are implemented
                        through VR, such as a foggy screen to simulate the loss of eyesight or haptic feedback on hand controllers to simulate
                        early symptoms of Parkinson's. Worked with a group of 4 students</p></Box>

                    <Box width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap" >
                        <h5>Parking App</h5>
                        <h6>HTML, CSS, Javascript, SQL, PHP</h6>
                        <a href="https://github.com/AaskaS/ParkingApp"><FontAwesomeIcon icon={faGithub} size="1x" className="icon"></FontAwesomeIcon></a>
                        <p>Parking services web application highlighting searching, commenting, and posting of
                        parking spaces available for rent, deployed on an AWS EC2 instance. </p></Box>


                    <Box width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap" >
                        <h5>Drive Safe</h5>
                        <h6>Java</h6>
                        <p className="special">Selected for display at 2016 McMaster Open House - Faculty of Engineering</p>
                        <p >Drive Safe allows users to choose the most environmentally friendly car based on CO2 emissions, fuel consumption,
                        fuel cost, preferred driver type, and geographic region. The fuel constraints were implemented using a database that
                        included fuel costs from around Canada over many years. The program trims the database based on the regions and fuel
                        types before calculating the slope of the fuel types in the past years. Worked with a group of 5 students.</p></Box>


                </div>



            </div>



        );
    }
}


