import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link as Links} from 'react-router-dom';
import Home from './Pages/Home';
import Operations from './Pages/Operations';
import Error from './Pages/ErrorPage';

function App() {


  return( 
	<Router>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>Bienvenido</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/Operations">Operations</Nav.Link>
					<Nav.Link href="#">Expenses</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link eventKey={2} href="#memes">
						Exit
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Container>
		</Navbar>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Operations" element={<Operations />} />
			<Route path="*" element={<Error />} />
		</Routes>
	</Router>
  );
}

export default App;