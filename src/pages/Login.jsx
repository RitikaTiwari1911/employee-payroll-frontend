/**
 * @module       Pages
 * @file         Login.jsx
 * @description  creates form for login
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        9/07/2021  
-----------------------------------------------------------------------------------------------*/


import React from 'react'
import{Grid, Paper, Avatar, TextField, Button} from '@material-ui/core'
//import { Typography } from '@material-ui/core'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
//import {Link} from 'react-router-dom'
import {userLogin} from '../service/user'

const Login = ()=>{
    const paperStyle = {padding: '30px 30px', width: 300, margin:"50px auto"}
    const headerStyle = {color:"rgb(17, 127, 237)"}
    const avatarStyle = {backgroundColor: "rgb(17, 127, 237)"}
    //const typoStyle = {margin:"auto 30px"}
    const buttonStyle = {margin:"40px 100px", backgroundColor: "rgb(17, 127, 237)", color:"white"}
    const initialValues = {
        emailId:'',
        password:''   
    }

    /**
     * @description schema validation for login page
     */    
    const validationSchema = Yup.object().shape({
        emailId: Yup.string().email("Enter a valid email id").required("Required"),
        password: Yup.string().min(8,"Password must be of atleast 8 characters")
    })
    
    const onSubmit=(values, props)=>{
        const loginDetails = {
            "emailId":values.emailId,
            "password":values.password
        }
        props.resetForm();
        userLogin(loginDetails)
    }
   
    /**
     * @description creating login page
     */
    return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
                <Grid align="center">
                <Avatar style = {avatarStyle} src="/broken-image.jpg" data-testid="avatar" />
                <h2 data-testid="heading1" style = {headerStyle}>Employee Payroll Application</h2>
                <h3 data-testid="heading2" style = {headerStyle}>Login</h3>
            </Grid>
            <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
                {(props)=>(
                    <Form data-testid="form">
                        <Field as={TextField} 
                            fullWidth label="Email ID" 
                            name = "emailId" 
                            required
                            data-testid="emailId"
                            helperText={<ErrorMessage name = "emailId">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField} 
                            fullWidth label="Password" 
                            type="password" 
                            name = "password"  
                            required
                            data-testid="password"
                            helperText={<ErrorMessage name = "password">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Button style = {buttonStyle} 
                            type="submit" variant="contained" 
                            data-testid="submitButton"
                            disabled = {props.isSubmitting}>
                            {props.isSubmitting?"Loading":"Login"}</Button>
                        {/**<Typography style = {typoStyle}>Create a new account
                            <Link to = '/signup'>
                                Signup
                            </Link>
                </Typography>**/}
                            
                    </Form>
                )}
            </Formik>
        </Paper>
    </Grid>
        
    )
}
export default Login