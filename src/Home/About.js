import React from 'react';
import './About.css';
import knit from '../images/pics/knitting1.jpg';
import knit2 from '../images/pics/knitting2.jpg';
import paris from '../images/pics/AaskaParis.jpg';
import tree from '../images/pics/AaskaTree.jpg';
import inter from '../images/pics/AaskaInterlaken.jpg';
import { Box } from '@material-ui/core';


export default class About extends React.Component {

    render() {
        return (
            <div className="About-header">

                <h5 className="hobbies">Hobbies</h5>

                <Box className="headerknit" width={1 / 2} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap">
                    <h5 >Knitting</h5>
                    <img src={knit} alt="pic of scarf" className="picknit" />
                    <img src={knit2} alt="pic of scarf" className="picknit" />
                </Box>

                <Box className="header" width={1 / 3} flexDirection="row" justifyContent="flex-start" flexWrap="nowrap">
                    <img src={tree} alt="pic of scarf" className="pic" />
                    <img src={inter} alt="pic of scarf" className="pic" />
                    <img src={paris} alt="pic of scarf" className="pic" />
                    <div>
                        <h5 className="head">Hiking/Travelling</h5>
                        <h6 className="head2">pre-pandemic :(</h6>
                    </div>


                </Box>

                <br></br>




            </div>
        );
    }
}