import Axios from 'axios'
require('dotenv').config()
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const userRegistration = (userCredentials) => {
    Axios.post('/registerEmp', userCredentials).then((res) => {
        console.log(res.data.message);
        alert("You are successfully registered!!")
    }).catch((error) => {
        console.log(error);
    })
}