import { decode } from 'jsonwebtoken';
import { getToken } from 'src/utils/factories/tokenFactory';

export const isLoggedIn = () => {
    const token = getToken();
    const decodedToken  = decode(token ? token:'');
    const expirationTime = decodedToken ? decodedToken['exp']:'';

    const result = new Date().getTime() / 1000 < parseInt(expirationTime === null ? '': expirationTime, 10);
    return result;
  }
  
  export const unlogin = () => {
    localStorage.removeItem('FC_TOKEN')
  }
  