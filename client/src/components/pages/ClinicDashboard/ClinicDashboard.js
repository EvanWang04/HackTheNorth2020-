import React from 'react'
import ClientNavbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";

function ClinicDashboard () {
    return (
        <>
        <Router>
          <ClientNavbar>
          <Switch>
             <Route path='/' exact />
          </Switch>
          </ClientNavbar>
        </Router>
        </>
    )
    
}