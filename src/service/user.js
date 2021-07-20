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

    export class User{
    /**
     * @description API integration for registration page
     * @param {*} userCredentials 
     */
    userRegistration = (userCredentials) => {
        return Axios.post('/registerUser', userCredentials)
    };


    /**
     * @description API integration for login page
     * @param {*} loginDetails 
     */
    userLogin = (loginDetails) => {
        return Axios.post('/userLogin', loginDetails)
    };
}

