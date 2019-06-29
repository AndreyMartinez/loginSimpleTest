import axios from "axios";
import utils from "../utils/api"


class UserApi {

    /**
     * @author Raphael Martinez
     * @description service login
     */
    static login(username,  password) {
       //api servicio validacion ingreso usuarios//
       const url = Math.random() >= 0.5? `http://www.mocky.io/v2/5cd41de53500002f347a5316` :`http://www.mocky.io/v2/5cd41e3635000089007a531b`
       return axios(
            {
               method: 'get',
                url:url,
            })
            .then(utils.checkStatus)
            .catch(error => {
                 throw error
            });
    }
}
export default UserApi;