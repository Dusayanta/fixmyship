import React, { Component } from 'react';
import {Container,Card,CardBody,CardHeader,Col} from 'reactstrap';

class MyFriends extends Component {
  render() {
    return (
      <div >
      <Container>
      <Col xl="12">
     <Card body inverse style={{ backgroundColor: 'white', borderColor: '#333' ,width: '500px', "margin-left": '-45%'}}>
        <CardHeader><h2 id='wall'>My Friends</h2></CardHeader>
        <CardBody>
            
        </CardBody>
            </Card>
            </Col>
            </Container>
      </div>
    );
  }
}

export default MyFriends;
