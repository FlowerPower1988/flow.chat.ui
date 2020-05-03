import { decode } from 'jsonwebtoken';

const isTokenActive = (token: string): boolean => {
    let result:boolean = false;

    const decodedToken  = decode(token);
    const expirationTime = decodedToken ? decodedToken['exp']:'';
    
    if(expirationTime){
        result = new Date().getTime() / 1000 < parseInt(expirationTime, 10);
    }

    return result;
}

const isAccountAuthenticated = () =>{
    const token = readPersistedToken();
    return token ? isTokenActive(token):false;
}
  
const removeToken = (): void => {
    localStorage.removeItem('FC_TOKEN')
}
  
const persistToken = (token: string): string | null =>{
  localStorage.setItem('FC_TOKEN', token)
  return token;
}

const readPersistedToken = (): string | null =>{
    const token = localStorage.getItem('FC_TOKEN');
    token === '' ? token === null : token
    return token;
}

export { readPersistedToken, removeToken, isTokenActive, persistToken, isAccountAuthenticated }