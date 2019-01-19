
export const isLoggedIn = () => {
    const expirationTime = localStorage.getItem('tokenExpirationTime')
    return new Date().getTime() / 1000 < parseInt(expirationTime === null ? '': expirationTime, 10)
  }
  
  export const unlogin = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpirationTime')
  }
  