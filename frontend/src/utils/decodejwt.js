
export const decodedToken = ()=>{
    const token = localStorage.getItem('jwtToken');
    if(token === undefined || token === null){
        return null;
    }else{
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken;
    }
    
}