
import * as React from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';

const LoginForm = (props: ILoginFormProps) => {
    return(
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange ={(value)=> props.onValueChange("email",value)} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange ={(value)=> props.onValueChange("password",value)} />
        </FormGroup>
        <Button onClick = {props.onLoginButtonClick} >Login</Button>
        </Form>
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