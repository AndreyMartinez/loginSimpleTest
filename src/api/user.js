import axios from "axios";
import utils from "../utils/api"


class UserApi {

    static authHeaders() {
        return {
            Authorization: `Basic YW13YXktY2xpZW50OmFtd2F5LXNlY3JldA==`,
        }
    }


    static login(username,  password) {
       //api servicio validacion ingreso usuarios//
        const url = `${process.env.REACT_APP_API}/oauth/token`
        var bodyFormData = new FormData();
        bodyFormData.set('grant_type','password');
        bodyFormData.set('username',username);
        bodyFormData.set('password',password);
        bodyFormData.set('applianceId','4jdkd');
        bodyFormData.set('operativeSystem','WEB');
        
        return axios(
            {
                headers: this.authHeaders(),
                method: 'post',
                url:url,
                data:bodyFormData
            })
            .then(utils.checkStatus)
            .then(utils.parseToken)
            .catch(error => {
                 throw error
            });
    }
}
export default UserApi;