import React, { Component } from 'react';
import '../style/defaultpostpage.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Card, CardHeader, Container, Button, Row, Col, FormGroup, Form, CardBody, Input } from 'reactstrap';
import PostHeader from './postheader';
import MyFriends from './myfriendssidebar';

class DefaultPostPage extends Component {
    constructor() {
        // call parent constructor
        super()
        // initialize state
        this.state = {
            enterComment:'',
            users: [
                {
                    post: ' this is default post changes in the reducer so head back to the reducer and make the following changes in the reducer so head back to  make the following '
                }
            ]
        }
    }
    handleComment=(e)=>{
        this.setState({enterComment:e.target.value})

    }
    handleAddComment=()=>{
       
        this.entercomment.value = '';
       
        let obj = {
            
            enterComment: this.state.entercomment
        }
        console.log(obj);
    }
    render() {
        let rows = this.state.users.map(u => {
            return (
                <p>{u.post}</p>
            )
        })
        return (
            <Row>
                <Col sm="8">

                    {/* <PostHeader/>  */}
                    <Container>
                        <Card body inverse style={{ backgroundColor: 'white', borderColor: '#333', width: "80%" }}>
                            <CardHeader><h2 id='wall'>Wall</h2></CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Input type="textarea" sm={2} placeholder="Share Somthing to the world..."></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button color="secondary" size="lg" onClick={this.handleUserData}>Post</Button>
                                        <div class="pull-right">
                                            <div class="btn-group">
                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" class="btn btn-default" id='font-symbol'><i class="fa fa-pencil"></i> Text</button>
                                                    <button type="button" class="btn btn-default" id='font-symbol'><i class="fa fa-picture-o" aria-hidden="true"></i>Image</button>
                                                    <button type="button" class="btn btn-default" id='font-symbol'><i class="fa fa-video-camera" aria-hidden="true"></i> Video</button>
                                                </div>
                                            </div>
                                        </div>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>

                    </Container>
                    <Container className='defaultpost-div'>
                        <Col>
                            <div class="panel panel-default post">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-2">
                                            <a><img src="./img/user.jpg" width="100px" height="100px"></img></a>
                                            <div class="text-center">
                                                DevUser1
                                               </div>
                                            <div class="likes text-center">7 Likes</div>
                                        </div>
                                        <div class="col-sm-10">
                                            <p id="post-id">{rows}</p>

                                            <p class="post-actions"><a href="#">Comment</a>-<a href="#">Like</a>
                                                -<a href="#">Follow</a>-<a href="#">Share</a></p>
                                            <div class="comment-form">
                                                <form class="form-inline">

                                                    <input type="text" class="form-control mb-2 mr-sm-2" onChange={this.handleComment} id="inlineFormInputName2" placeholder="Enter Comment.."></input>

                                                    <button type="button" class="btn btn-secondary mb-2" onClick={this.handleAddComment}>Add</button></form>
                                            </div>

                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="comments">
                                            <div class="comment">
                                                <a class="comment-avatar pull-left" href="#"><img src="img/user.jpg" height="60px" width="60px"></img></a>

                                                <div class="comment-text">
                                                    <p>ifferent from other Lorem Ipsum dummy text generators you may find around the web</p>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="comment">
                                                <a class="comment-avatar pull-left" href="#"><img src="img/user.jpg" height="60px" width="60px"></img></a>

                                                <div class="comment-text">
                                                    <p>ifferent from other Lorem Ipsum dummy text generators you may find around the web</p>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Container>


                </Col>
                <Col sm="4">
                    <MyFriends />
                </Col>
            </Row>
        );
    }
}

export default DefaultPostPage;
