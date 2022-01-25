import axios from "axios";
import { AsyncStorage } from "react-native";

const instance= axios.create({
    baseURL: 'https://chirp-server.herokuapp.com'
})

instance.interceptors.request.use(
    async (config)=>{
        const token=await AsyncStorage.getItem('token')
        if(token){
            config.headers.authorization=`Bearer ${token}`;
        }
        return config;
    },
    (err)=>{
return Promise.reject(err)
    }
    
);

export default instance;