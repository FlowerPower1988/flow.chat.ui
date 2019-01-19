
import {  map, catchError  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { getToken } from 'src/utils/factories/tokenFactory';

function defaultOnError(error: any){
    console.log('error: ', error)
}

const API_URL: string = 'https://localhost:44389/';

function get(
    endpoint: string, 
    onResponse: (response: any)=>void = ()=>{},
    onError: (error: any)=>void = defaultOnError, 
    headers:object = {}){
        
        addAuthorizationHeader(headers);
  
        return ajax.get(API_URL + endpoint,headers).pipe(
            map<any,any>(response => onResponse!(response)),
            catchError(map(error => onError!(error)))
        )
} 

function post(
    endpoint: string, 
    body?: any,
    onResponse: (response: any)=>void = ()=>{},
    onError: (error: any)=>void = defaultOnError, 
    headers?:object){

        addAuthorizationHeader(headers);
  
        return ajax.post(API_URL + endpoint,body,headers).pipe(
            map<any,any>(response => onResponse!(response)),
            catchError(map(error => onError!(error)))
        )
} 

function put(
    endpoint: string, 
    body?: any,
    onResponse: (response: any)=>void = ()=>{},
    onError: (error: any)=>void = defaultOnError, 
    headers?:object){

        addAuthorizationHeader(headers);
  
        return ajax.put(API_URL + endpoint,body,headers).pipe(
            map<any,any>(response => onResponse!(response)),
            catchError(map(error => onError!(error)))
        )
} 

function patch(
    endpoint: string, 
    body?: any,
    onResponse: (response: any)=>void = ()=>{},
    onError: (error: any)=>void = defaultOnError, 
    headers?:object){

        addAuthorizationHeader(headers);
  
        return ajax.patch(API_URL + endpoint,body,headers).pipe(
            map<any,any>(response => onResponse!(response)),
            catchError(map(error => onError!(error)))
        )
} 

function deleteRequest(
    endpoint: string, 
    onResponse: (response: any)=>void = ()=>{},
    onError: (error: any)=>void = defaultOnError, 
    headers:object = {}){
        
        addAuthorizationHeader(headers);
  
        return ajax.delete(API_URL + endpoint,headers).pipe(
            map<any,any>(response => onResponse!(response)),
            catchError(map(error => onError!(error)))
        )
} 


function request(
    endpoint: string, 
    onResponse: (response: any)=>void = ()=>{},
    onError: (error: any)=>void = defaultOnError, 
    headers:object = {},
    commandType: 'get'|'post'|'patch'|'put'|'delete',
    body?: any
    ){
        
        addAuthorizationHeader(headers);
        let command;
        
        if(commandType === 'get'){
            command = ajax.get(API_URL + endpoint,headers);
        }
        else if(commandType === 'delete'){
            command = ajax.delete(API_URL + endpoint,headers);
        }
        else if(commandType === 'post'){
            command = ajax.post(API_URL + endpoint,body,headers);
        }
        else if(commandType === 'patch'){
            command = ajax.patch(API_URL + endpoint,body,headers);
        }
        else if(commandType === 'put') {
            command = ajax.put(API_URL + endpoint,body,headers);
        }else{
            throw "commandType out of range";
        }


        return command.pipe(
            map<any,any>(response => onResponse!(response)),
            catchError(map(error => onError!(error)))
        )
} 







function addAuthorizationHeader(headers: object = {}){
    const token = getToken();
        
    if(!headers.hasOwnProperty('Authorization') && token){
        headers['Authorization'] = `Bearer ${token}`
    }
}

export { get, post, put, patch, deleteRequest as delete }