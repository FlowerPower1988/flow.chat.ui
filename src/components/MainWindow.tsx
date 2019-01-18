
import * as React from 'react';
import { Card, CardBody, Collapse, CardHeader } from 'reactstrap';

const MainWindow = (props: IProps) => {
    return(
        <Card>
            <CardHeader top width="100%" onClick = {props.onExpanButtonClick} >Text</CardHeader>
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
}

export {
    IProps,
    MainWindow 
}