import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
//import { Router, Switch } from 'react-router';
import logo from './logoIST.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import kab314 from '../Pages/kab314';
import kab315 from '../Pages/kab315';
import kab316 from '../Pages/kab316';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="40"
                            width="40"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="header">           
                            <Nav.Link href="/">Smart Zav. Lab.</Nav.Link>
                            <Nav.Link href="/kab314">314</Nav.Link>
                            <Nav.Link href="/kab315">315</Nav.Link>
                            <Nav.Link href="/kab316">316</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>                 
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/kab314" component={kab314} />
                        <Route exact path="/kab315" component={kab315} />
                        <Route exact path="/kab316" component={kab316} />
                    </Switch>
                </Router>      
         </>
      );
    }
}