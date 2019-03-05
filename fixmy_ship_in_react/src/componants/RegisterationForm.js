import React, { Component } from 'react';
import {Container ,Button,Row,Label, Col,FormGroup,Form,CardHeader,Card,CardBody,Input,FormFeedback} from 'reactstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class RegistrationForm extends Component {
  constructor(){
    super()
    this.state={
      formName:"",

    }
    this.handelUsername=this.handelUsername.bind(this)
    this.handleUserData=this.handleUserData.bind(this)
  }
  handelUsername=(e)=>{
    this.setState({formName:e.target.value})
    
  }
  handleUserData=()=>{
    this.refs.username.value=''
   alert("handled");
   let obj={
     name:this.state.formName
   }
   console.log(obj);
  }
  render() {
    return (
     <Container>
      <Col xl="8">
     
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333',width:"70%" }}>
        <CardHeader><h2>RegistrationForm</h2></CardHeader>
        <CardBody>
        <Form>
        <FormGroup>
          <Label for='username' >Username</Label>
          <Input type="text" bsSize="lg" onChange={this.handelUsername} ref='username'></Input>
       </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type="password" bsSize="lg"></Input>
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input type="email" bsSize="lg"></Input>
        </FormGroup>
        <FormGroup>
          <Label for='dob'>DOb</Label>
          <Input type="date" bsSize="lg"></Input>
        </FormGroup>
        <FormGroup>
          <Label for='username'>Address</Label>
          <Input type="textarea"></Input>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" bsSize="lg" name="city" id="exampleCity"/>
           </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" bsSize="lg" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="number" bsSize="lg" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup>
          <Button color="success" onClick={this.handleUserData}>Register</Button>
          </FormGroup>
      </Form>
        </CardBody>
      </Card>
      
      </Col>
     </Container>
    );
  }
}

export default RegistrationForm;
