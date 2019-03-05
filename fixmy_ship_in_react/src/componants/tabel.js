import React, { Component } from 'react';
import {Container,Row,Label, Col,FormGroup,Form,CardHeader,Card,CardBody,Input} from 'reactstrap';
import { Table } from 'reactstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class UserTabel extends Component {
    users=[
        {
            id:1,
            name:"shital",
            email:"shital@gmail"
        },
        {
            id:2,
            name:"geeta",
            email:"stal@gmail"
        },
        {
            id:1,
            name:"shital",
            email:"shital@gmail"
        }
    ]
  render() {
      let rows=this.users.map(u=>{
          return (
              <tr>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
              </tr>
          )
      })

    return (
      <Container>
          <Col-xl-4>
          <h2>User Info Tabel</h2>
          <Table responsive striped bordered >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
               

          </Table>
          </Col-xl-4>
      </Container>
    );
  }
}

export default UserTabel;
