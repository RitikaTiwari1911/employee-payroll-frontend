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
    /**
     * @description API integration for registration page
     * @param {*} empDetails 
     */
    createEmp = (empDetails) => {
        return Axios.post('/registerEmp', empDetails,{
            headers:{
                'token': token
            }
        })
    };

    readAllData = () => {
        return Axios.get('/readAllData',{
            headers: {
                'token': token
            },
        });
    }

    deleteEmp = (empId) => {
        return Axios.delete(`/deleteEmp/${empId}`,{
            headers:{
                'token':token
            }
        })
    }
}