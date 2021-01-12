import React from 'react';
import './CSS.css';
import { Box, Button } from '@material-ui/core';




export default class CSS extends React.Component {

    render() {
        return (
            <div className="header">
                {/*    <h1>Aaska Shah</h1> */}
                {/*<img src={delta} alt="deltahacks logo" className="School-delta" /> <img src={cs} alt="cs society logo" className="School-cs" />*/}

                <Box className="clubpar" width={1 / 3} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap">


                    <h5>Deltahacks 2</h5>
                    <h6>Logistics Team</h6>
                    <p>As a part of the logistics team, there were many tasks involved in preparing for a 24-hour hackathon.
                    My responsibilities included communicating with McMaster's administration, budgeting costs, finding deals
                    for food and transportation, creating the event schedule, recruiting volunteers, and assigning volunteers. </p></Box>




                <Box className="clubpar" width={1 / 3} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap"  >

                    <h5>Computer Science Society</h5>
                    <h6>Project Manager, Vice President External</h6>
                    <p >During my undergrad, I undertook two different positions in the Computer Science Society.
                    One as a Project Manager, and the other as Vice President External.<br></br>
                    &nbsp; As a <b><i>Project Manager</i></b>, my responsibilities included organizing events and projects run
                    by the society. I also served as a link between society executives and committees within the organization.<br></br>
                    &nbsp; Alternatively, my <b><i>Vice President External</i></b> responsibilities included managing connections,
                    collaborating with other student groups within the university, and overseeing the directors within the society.
         </p></Box>



            </div>



        );
    }
}

