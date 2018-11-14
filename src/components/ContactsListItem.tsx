
import * as React from 'react';
import {ListGroupItem} from 'reactstrap';

const ContactsListItem = (props: IProps) => {
    return(
        <ListGroupItem contactId = {props.contactId} onDoubleClick = {props.onIemDoubleClick} >{props.displayedAlias}</ListGroupItem>
    )
}

interface IProps {
    displayedAlias: string,
    contactId: number,
    onIemDoubleClick: () => void
}

export {
    IProps,
    ContactsListItem
}