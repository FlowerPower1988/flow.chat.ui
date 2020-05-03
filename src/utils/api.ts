
import {  map, catchError, mergeMap  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { readPersistedToken } from 'src/utils/managers/tokenManager';
import { ObservableInput } from 'rxjs';

const API_URL: string = 'https://localhost:44389/';

const get = (
    endpoint: string, 
    onResponse?: (response: any)=>ObservableInput<any>,
    onError?: (error: any)=>void, 
    headers?:object) => {
        return sendRequest(endpoint,onResponse,onError,headers,'get');
} 

const post = (
    endpoint: string, 
    body?: any,
    onResponse?: (response: any)=>ObservableInput<any>,
    onError?: (error: any)=>void, 
    headers?:object) => {
        return sendRequest(endpoint,onResponse,onError,headers,'post',body);
} 

const put = (
    endpoint: string, 
    body?: any,
    onResponse?: (response: any)=>ObservableInput<any>,
    onError?: (error: any)=>void, 
    headers?:object) => {
        return sendRequest(endpoint,onResponse,onError,headers,'put',body);
} 

const patch = (
    endpoint: string, 
    body?: any,
    onResponse?: (response: any)=>ObservableInput<any>,
    onError?: (error: any)=>void, 
    headers?:object) => {
        return sendRequest(endpoint,onResponse,onError,headers,'patch',body);
} 

const deleteRequest = (
    endpoint: string, 
    onResponse?: (response: any)=>ObservableInput<any>,
    onError?: (error: any)=>void , 
    headers?:object) => {
        return sendRequest(endpoint,onResponse,onError,headers,'delete');
} 


const sendRequest = (
    endpoint: string, 
    onResponse: (response: any)=>ObservableInput<any> = ()=>{ return []},
    onError: (error: any)=>void = defaultOnError, 
    headers:object = {},
    commandType: 'get'|'post'|'patch'|'put'|'delete',
    body?: any)=>
    {
        
        addDefaultHeaders(headers);
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
            mergeMap<any,any>(response => 
                onResponse!(response)),
            catchError(map(error => 
                onError!(error)))
        )
}   

const defaultOnError = (error: any) => {
    console.log('error: ', error)
}

const addAuthorizationHeader = (headers: object = {}) =>{
    const token = readPersistedToken();     
    if(!headers.hasOwnProperty('Authorization') && token){
        headers['Authorization'] = `Bearer ${token}`
    }
}

const addContentTypeHeader = (headers: object = {}) =>{ 
    if(!headers.hasOwnProperty('Content-Type')){
        headers['Content-Type'] = `application/json`
    }
}

const addDefaultHeaders = (headers: object) => {
    addAuthorizationHeader(headers);
    addContentTypeHeader(headers);
}

export { get, post, put, patch, deleteRequest as delete }