
import * as React from 'react';
import {Form,FormGroup,Label,Input,Button,Container,Row,Col,ButtonGroup} from 'reactstrap';

const LoginForm = (props: ILoginFormProps) => {
    return(
        <Container>
        <Form>
    
        <Row>
        <Col>
        <FormGroup>
          <Label size="sm" for="exampleEmail">Email</Label>
          <Input bsSize="sm" type="email" name="email" id="exampleEmail" placeholder="Email" onChange ={(value)=> props.onValueChange("email",value)} />
        </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col>
        <FormGroup>
          <Label size="sm" for="examplePassword" >Password</Label>
          <Input bsSize="sm" type="password" name="password" id="examplePassword" placeholder="Password" onChange ={(value)=> props.onValueChange("password",value)} />
        </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col xs={{ size: 4, offset: 4 }}>
        <ButtonGroup size="sm">
        <Button onClick = {props.onLoginButtonClick} >Sign In</Button>
        <Button onClick = {props.onLoginButtonClick} >Register</Button>
        </ButtonGroup>

        </Col>
        </Row>
     
        </Form>
        </Container>



    )
}

interface ILoginFormProps {
    onValueChange : ( property: string, e:any )=> void,
    onLoginButtonClick: () => void
}

export {
    ILoginFormProps,
    LoginForm
}