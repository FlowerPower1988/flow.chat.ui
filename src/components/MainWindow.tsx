
import * as React from 'react';
import { Card, CardBody, Collapse, CardHeader } from 'reactstrap';
import { ContactsListConnected } from '../containers/ContactsList'
const MainWindow = (props: IProps) => {
    return(
        <Card>
            <CardHeader top width="100%" onClick = {props.onExpanButtonClick} >Text</CardHeader>
                <Collapse isOpen={props.isExpanded}>
                    <CardBody>
                        <ContactsListConnected/>
                    </CardBody>
                </Collapse>
        </Card>
    )
}

interface IProps {
    isExpanded: boolean,
    onExpanButtonClick: () => void;
}

export {
    IProps,
    MainWindow 
}