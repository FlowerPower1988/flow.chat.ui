
import * as React from 'react';
// import {ListGroupItem,ListGroupItemHeading,ListGroupItemText} from 'reactstrap';

const ContactsListItem = (props: IProps) => {
    return(
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start py-1">
            <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1 ">{props.displayedAlias}</h6>
            <small>Status</small>
            </div>
            <small className="mb-1">{props.description}</small>
        </a>
    )
}

interface IProps {
    displayedAlias: string,
    description: string
    contactId: number,
    onIemDoubleClick: () => void
}

export {
    IProps,
    ContactsListItem
}