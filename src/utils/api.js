const utils ={

    checkStatus:(response) =>{
        console.log(response.data.Auth)
        if (response.data.Auth !== "Logged") {
        const error = new Error(`HTTP Error`);
        error.status = response.statusText;
        error.response = response.data;
        throw error;
        }
        else return response;
    }
}

export default utils