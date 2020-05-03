
import * as React from 'react';
import { Card, CardBody, Collapse, CardHeader } from 'reactstrap';

const MainWindow = (props: IProps) => {
    return(
        <Card>
            <CardHeader className="py-1" top width="100%" onClick = {props.onExpanButtonClick} >

<form className="form-inline">
  <div className="form-group">
    <label htmlFor ="user-description" aria-describedby="user-description">User</label>
    <input placeholder="No description..." style={{ background: "transparent",border: "none"}} type="text" id="user-description" className="form-control mx-sm-3 form-control-sm" />
  </div>
</form>

<button type="button" onClick = {props.onLogoutButtonClick} className ="btn btn-primary">Logout</button>
            </CardHeader>
                <Collapse isOpen={props.isExpanded}>
                    <CardBody>
                        {props.content}
                    </CardBody>
                </Collapse>
        </Card>
    )
}

interface IProps {
    content: JSX.Element
    isExpanded: boolean,
    onExpanButtonClick: () => void;
    onLogoutButtonClick: () => void;
}

export {
    IProps,
    MainWindow 
}