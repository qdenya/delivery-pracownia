import axios from "axios";
import apiConfig from './config';

const getRest = () => {
    var config = {
        method: 'get',
        url: apiConfig.hostname + '/getRestaurants',
        withCredentials: false,
    };

    axios(config)
    .then(function (response) {
        return(JSON.stringify(response.data));
    })
    .catch(function (error) {
        return(error);
    });
}

export default getRest;