/**
 * @module       service
 * @file         user.js
 * @description  API
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        13/07/2021  
-----------------------------------------------------------------------------------------------*/
import Axios from 'axios'
require('dotenv').config()
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

/**
 * @description API integration for registration page
 * @param {*} userCredentials 
 */
export const userRegistration = (userCredentials) => {
    Axios.post('/registerEmp', userCredentials).then((res) => {
        console.log(res.data.message);
        alert("You are successfully registered!!")
    }).catch((error) => {
        console.log(error);
        alert("User already exists!!")
    })
}


/**
 * @description API integration for login page
 * @param {*} loginDetails 
 */
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

    
    
