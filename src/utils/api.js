const utils ={

    authHeaders(){
        return{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            },             
        }
    },

    checkStatus:(response) =>{
        if (response.status >= 200 && response.status < 300 && response.data.code < 1999 ) 
        return response.data;
        const error = new Error(`HTTP Error`);
        error.status = response.statusText;
        error.response = response.data;
        throw error;
    },

    parseToken:(response) => {  
   localStorage.setItem('kctoken', response.access_token);
         return response;
    },

    parseLogout:(response) => {
        localStorage.removeItem('kctoken');
        return response.data;

    }

}

export default utils