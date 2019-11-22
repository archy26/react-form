import React, { Component } from 'react';
import { Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
class App extends Component {
   
  render() {
    return (
      <div className="App" style={{backgroundColor:"grey"}}>
      <Jumbotron style={{margin:400,marginTop:0,marginBottom:0}}>
      <div>
  <Button variant="primary" size="lg" block>
    SandSecure Registration Page
  </Button>
  <Form.Group></Form.Group>
</div>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Passphrase</Form.Label>
    <Form.Control type="password" placeholder="Passphrase" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Generate
  </Button>
  <Form.Group></Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Public Key</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Private key</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>

  <Button style={{margin:2}}variant="primary" type="submit">
   Save
  </Button>
  <Button variant="secondary" active>
    Discard
  </Button>


</Jumbotron>
      </div>
    );
  }
}

export default App;
