import React from 'react';
import logo from '../images/AaskaWork2.png';
import './Work.css';
import { Box } from '@material-ui/core';




export default class Work extends React.Component {
    render() {
        return (
            <div className="header">
                {/*https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=212121&primary.text.color=4fc2f7&secondary.color=7986CB*/}
                {/* <img src={loblaw} alt="logo" className="loblaw" /><img src={thales} alt="logo" className="thales" /> <img src={thales} alt="logo" className="thales" />*/}

                <img src={logo} className="Work-logo" alt="logo" />
                <div className="Work-header" >
                    {/*    <h1>Aaska Shah</h1> */}


                    <Box className="workpar" width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap" >
                        <h5>Software Analyst</h5>
                        <h6>Thales</h6>
                        <p>I implemented python scripts to manipulate and automate hardware simulated data that would be used as dynamic
                        configurations. I also worked with System Engineers on the Santiago LRT and Ottawa LRT to ensure accuracy between
                        the real-life train behaviour and the corresponding Thales Rail Signaling Solution.</p></Box>

                    <Box className="workpar" width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap" >
                        <h5>Software Analyst Co-op</h5>
                        <h6>Thales</h6>
                        <p >The simulation of the Seltrac CBTC solution (Thales Rail Signaling Solutions) innovated by Thales is used as an
                        internal tool and in constant improvement as technology changes.
                        Written in C++, I started the implementation of a new feature on the simulation which would emulate the real-life
                        hardware and process.</p></Box>

                    <Box className="workpar" width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap">
                        <h5>IT Intern</h5>
                        <h6>Loblaw</h6>
                        <p>Used JavaScript and XML to develop a program that presents a dynamic view of the SAP Retail ERP custom objects
                        that allows the business to make financial decisions based on the trends. <br></br>
                        Created a tool to automate a business process using SAP Personas that made the task 66% more efficient for
                        users. Collaborated with functional consultants and developers to collect requirements to deliver the solution.
                        This was my first project in a business setting where I was the sole developer, which allowed me to fully understand
                        and implement agile development.</p></Box>

                    <Box className="workpar" width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap">
                        <h5>Tutor</h5>
                        <h6>Braeburn Neighborhood Place</h6>
                        <p>I tutored in Math, Science, Computer Science, English, History, Accounting, and Chemistry for students in
                        grades 9 through 11. I learned a lot about teaching while working with different students. Since all of them
                        understood the material in different ways, it required a lot of creativity to find which method worked for each
                        person. My communication skills improved significantly, as well as my understanding of the subjects.</p></Box>



                </div>



            </div>



        );
    }
}

/*

 <Box width={1 / 3} className="box1" >

                </Box>

*/