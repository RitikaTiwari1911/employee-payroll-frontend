/**
 * @module       service
 * @file         employee.js
 * @description  API integration for employee
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        22/07/2021  
-----------------------------------------------------------------------------------------------*/

import Axios from 'axios'
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
require('dotenv').config()
let token = localStorage.getItem('token')

export class Employee{

    //getToken = () => {
    //    const headers = {
    //        headers: { Authorization: localStorage.getItem('token') },
    //        };
    //    return headers;
    //};
    /**
     * @description API integration for registration page
     * @param {*} empDetails 
     */
    createEmp = (empDetails) => {
        //const headers = this.getToken();
        return Axios.post('/registerEmp', empDetails,{
            headers:{
                'token': token
            }
        })
    };

    readAllData = () => {
        //const headers = this.getToken();
        return Axios.get('/readAllData',{
            headers: {
                'token': token
            },
        });
    }
}