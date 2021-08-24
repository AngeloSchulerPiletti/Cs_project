import axios from 'axios';
import { API_URL } from "/service/serviceSettings";

class WeatherForecastService {
    get() {
        return axios.get(`${API_URL}rota-exemplo`).then((response) => {
            return response.data;
        }).catch(console.log);

    }
}

export default new WeatherForecastService();