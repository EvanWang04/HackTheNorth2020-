import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, FormControl, Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function ClientNavbar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Welcome Client</Navbar.Brand>
            <Nav className="mr-auto">
            <Container><Nav.Link href="#home">Main</Nav.Link></Container>
            <Container><Nav.Link href="#features">Track</Nav.Link></Container>
            <Container><Nav.Link href="#pricing">Report</Nav.Link></Container>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        </>
    )
}


export default ClientNavbar
