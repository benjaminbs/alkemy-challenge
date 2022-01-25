import React from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Operations() {


  return (
	<Container className="mt-5" style={{fontSize:"20px"}}>
	<Row className="justify-content-md-center">
		<Col md="6">
			<h1 className="text-center">New record: </h1>
			<Form >
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Concept</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Amount</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Income or expensive:</Form.Label><br/>
					<Form.Check inline type="checkbox" label="Income" />
					<Form.Check inline type="checkbox" label="Expensive" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Category</Form.Label>
					<Form.Select aria-label="Default select example">
						<option>Select category</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</Form.Select>
				</Form.Group>

				<Button variant="primary" type="submit">
					Create record
				</Button>
			</Form>
		</Col>
	</Row>
</Container>
  )
}

export default Operations;