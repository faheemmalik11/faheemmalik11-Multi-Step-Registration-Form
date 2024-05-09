import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "exampl.com/", 
});



export default axiosInstance;