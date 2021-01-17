import React, {useState} from 'react'
import { ClinicNavbar } from '../../Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import ReactMapGL, {Marker} from "react-map-gl"
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export default function ClinicReport(){
    return(
        <div>
            <div>
                <Router>
                <ClinicNavbar>
                <Switch>
                    <Route path='/' exact />
                </Switch>
                </ClinicNavbar>
                </Router>
            </div>
            <OuterBox>
                <InnerBox></InnerBox>
            </OuterBox>
                

        </div>
    );
}

const OuterBox = style.div`
position: absolute;
width: 1369px;
height: 569px;
left: 36px;
top: 139px;
`;

const InnerBox = style.div`
position: absolute;
left: 1.75%;
right: 1.75%;
top: 3.87%;
bottom: 4.22%;

background: #FFFFFF;
border-radius: 20px;
`;