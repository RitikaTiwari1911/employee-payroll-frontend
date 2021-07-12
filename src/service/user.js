import Axios from 'axios'
require('dotenv').config()
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const userRegistration = (userCredentials) => {
    Axios.post('/registerEmp', userCredentials).then((res) => {
        console.log(res.data.message);
        alert("You are successfully registered!!")
    }).catch((error) => {
        console.log(error);
        alert("User already exists!!")
    })
}

export const userLogin = (loginDetails) => {
    Axios.post('/empLogin', loginDetails).then((res) => {
        console.log(res.data.message);
        console.log("token :",res.data.data);
        alert("You are successfully logged in!!")
    }).catch((error) => {
        console.log(error);
        alert("Wrong credentials")
    })
}

    
    
