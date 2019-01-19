
function getToken(): string | null{
    const token = localStorage.getItem('FC_TOKEN');
    token === '' ? token === null : token
    return token
}

export { getToken }