import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {


	return (
		<Container className="mt-5">
			<Row className="justify-content-md-center">
				<Col md="auto text-center">
					<h1>Cash: </h1>
					<p>Last movements</p>
				</Col>
			</Row>
		</Container>
	)
}

export default Home;