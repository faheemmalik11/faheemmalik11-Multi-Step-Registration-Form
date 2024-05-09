import axios from "./core";

export const registerUser = async (registrationRequest: any) => {
  
    try {
        const res = await axios.post('/v1/register', registrationRequest);
        return res?.data;

    } catch (error: any) {
        return error
    }
}
