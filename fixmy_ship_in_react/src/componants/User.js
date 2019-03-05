import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import "../style/user.css";
import {Container ,Button,Row,Label, Col,FormGroup,Form,CardHeader,Card,CardBody,Input,FormFeedback} from 'reactstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


let UserForm = props => {
  const { handleSubmit } = props;
  return  <Container>
  <Col xl="10"> 
  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333',width:"70%",marginLeft:"25%" }}>
  <CardHeader><h2>RegistrationForm</h2>
  <CardBody>
  <form onSubmit={handleSubmit} className="form">
  
    <div className="field">
      <div className="control">
        <Field name="firstName" component={renderField} type="text" label="First Name"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="lastName" component={renderField} type="text" label="Last Name"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="email" component={renderField} type="email" label="Email Address"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="password" component={renderField} type="password" label="Password"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="age" component={renderField} type="number" label="Age"/>
      </div>
    </div>
    {/* <div className="field">
      <div className="control">
        <label className="label">Gender</label>
        <label className="radio">
          <Field name="gender" component="input" type="radio" value="male" />
          {' '}
          Male
        </label>
        <label className="radio">
          <Field name="gender" component="input" type="radio" value="female" />
          {' '}
          Female
        </label>
      </div>
    </div> */}

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
          Save Details
        </label>
      </div>
    </div>
    <div className="field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>

  </form>
  </CardBody>
  </CardHeader>
  </Card>
  </Col>
  </Container>
};

const validate = val => {
  const errors = {};
  if (!val.firstName) {
    // console.log('First Name is required');
    errors.firstName = 'First Name is Required';
  }
  if (!val.lastName) {
    // console.log('Last Name is required');
    errors.lastName = 'Last Name is Required';
  }
  if (!val.email) {
    // console.log('email is required');
    errors.email = 'Email is Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    // console.log('email is invalid');
    errors.email = 'Invalid email address';
  }
  if (!val.age) {
    errors.age = 'Age is Required'
  } else if (isNaN(Number(val.age))) {
    errors.age = 'Age must be a number'
  } else if (Number(val.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input className="input" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className='input-error'>{error}</span>) || (warning && <span className='input-warning'>{warning}</span>))}
    </div>
  </div>
)

UserForm = reduxForm({
  form: 'userForm',
  validate,
})(UserForm);

class User extends Component {
  constructor(){
      super()
      this.state={
          userSaved:null
      }
      this.handleRegister = this.handleRegister.bind(this)
  }
  handleRegister =async values => {
    this.setState({userSaved:'User has been saved successfully'})
    console.log("values",values);
    try{
    const res = await fetch('http://localhost:4210/user/add',{
            method: 'POST',
            body: JSON.stringify(values),
            headers:{
              'content-type':'application/json'
            }
        })
        console.log('Processed')
        const data = await res.json()
        console.log('Completed ',res)
      }catch(error){
            console.log('Error ',error)
      }
      this.props.history.push("/login");
  };

  render() {
    return (
      <div className="App">
      <div >
        <span className='register-success'>
           {this.state.userSaved}
          </span>
        </div>
        <div className="container">
          <UserForm onSubmit={this.handleRegister} />
        </div>
        
      </div>
    );
  }
}

export default User;
