// import { ajax } from 'rxjs/ajax';
// import { Actions } from '../types/Actions';
// import * as actionsTypes  from '../consts/actions';
// import { getConactsEnd,GetContactsStart } from '../actions/index';
// import { ActionsObservable,ofType } from 'redux-observable';
// import { Action } from 'redux';
// import { Observable } from 'rxjs';
// import { mergeMap, map, catchError  } from 'rxjs/operators';

// import axios from 'axios';
// import { ajax } from 'rxjs/ajax';
// import { map, catchError } from 'rxjs/operators';

// function performGetRequest1() {
//     axios.get('http://jsonplaceholder.typicode.com/todos')
//       .then(function (response) {
//       console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });   
// }

// const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
//   map(userResponse => console.log('users: ', userResponse)),
//   catchError(map(error => console.log('error: ', error)))
// );


// ajax.getJSON(`https://localhost:44389/users/${action.payload !== undefined ?action.payload.userId :""}/contacts`).pipe(
//         map<any,any>(
//           response => 
//             getConactsEnd([{id:12,login:"dc",status:0,description:response.description }])),
//         catchError(
//           map(
//             error => console.log('error: ', error)))
//         )