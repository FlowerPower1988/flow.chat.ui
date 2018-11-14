
import * as React from 'react';
import {ContactsListItem, IProps as ItemProps} from './ContactsListItem';
import { ListGroup } from 'reactstrap';
    
const ContactsList = (props: IProps) => {
    return(
        <ListGroup>
            {props.itemsProps.map(element => {return <ContactsListItem {...element} />})}
        </ListGroup>
    )
}

interface IProps {
    itemsProps: Array<ItemProps>
}

export {
    IProps,
    ContactsList 
}