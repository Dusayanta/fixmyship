import React, { Component } from 'react';
import { Card,Row, CardImg,Col, CardText, CardBody,CardHeader,CustomInput,
    CardTitle, CardSubtitle, Button ,FormGroup,Input,Alert} from 'reactstrap';
import "../style/login.css";
import { NavLink } from "react-router-dom";
import PostHeader from './postheader';
import DefaultPostPage from './defaultpostpage';
  
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
          Loginusername:"",
          LoginPassword:"",
          ExistingUser:"",
          LogIn:""
    
        }
        // this.handelUsername=this.handelUsername.bind(this)
        // this.handleUserData=this.handleUserData.bind(this)
      }
      handelUsername=(e)=>{
        this.setState({Loginusername:e.target.value})
        
      }
      handlePassword=(e)=>{
        this.setState({LoginPassword:e.target.value})
        
      }
    
    handleLogin = async values => {
       // console.log("values",values);
        
        try {
            
            const res = await fetch('http://localhost:4210/users', {
                method: 'GET',
               
            })
            console.log('Processed')
            const data = await res.json()
            console.log('Completed ', res)
            console.log("data",data);
           // console.log(obj);
           this.refs.email.value = '';
           this.refs.password.value = '';
          
           let obj = {
               name: this.state.Loginusername,
               password: this.state.LoginPassword
           }
           console.log(obj);
           let arr=[];
           arr=data.filter(d=>d.email==obj.name && d.password==obj.password);
          
           if(arr!=''){
            this.props.history.push("/post");
           }
           else
           {
            alert("Please enter valid credential")
           }
       } 
        catch (error) {
            console.log('Error ', error)
        }
  }
 
  render()
   {
    return (
        <div className="login-div">
      
         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333',width:"60%" }}>
         <CardHeader><h2>User Login</h2></CardHeader>
          <CardBody>
            <CardText>
                <FormGroup>
                <Input type="text" onChange={this.handelUsername}ref='email'required placeholder="Email"></Input>
                </FormGroup>
                <FormGroup>
                <Input type="password" onChange={this.handlePassword} ref='password' placeholder="Password"></Input>
                </FormGroup>
            </CardText>
            <Row form>
            <Col md={3}>
            <Button color="success" onClick={this.handleLogin}>Login</Button>
            </Col>
            <Col md={4}>
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Remember me" />
           </Col>
           <Col md={4}>
           <a href="forget password?">Forget Password ?</a>
          </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}


export default Login;
