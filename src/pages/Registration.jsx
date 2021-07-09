import React from 'react'
import{Grid, Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'

const Registration = ()=>{
    const paperStyle = {padding: '30px 30px', width: 300, margin:"50px auto"}
    const headerStyle = {color:"rgb(17, 127, 237)"}
    const avatarStyle = {backgroundColor: "rgb(17, 127, 237)"}
    const buttonStyle = {margin:"40px 100px", backgroundColor: "rgb(17, 127, 237)", color:"white"}
    const typoStyle = {margin:"auto 20px"}
    const initialValues = {
        firstName:'',
        lastName:'',
        emailId:'',
        password:''   
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "First Name must have alteast three alphabets")
        .matches(/^[a-zA-Z]{3,}$/, "First Name must contain alphabets only").required("Required"),
        lastName: Yup.string().min(3, "Last Name must have alteast three alphabets")
        .matches(/^[a-zA-Z]{3,}$/, "First Name contain alphabets only").required("Required"),
        emailId: Yup.string().email("Enter a valid email id").required("Required"),
        password: Yup.string().min(8,"Password must be of atleast 8 characters")
    })
    const onSubmit=(values, props)=>{
        console.log(values)
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)
        
        console.log(props)
    }

    
    return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
                <Grid align="center">
                <Avatar style = {avatarStyle} src="/broken-image.jpg" />
                <h2 style = {headerStyle}>Employee Payroll Application</h2>
                <h3 style = {headerStyle}>Sign up</h3>
            </Grid>
            <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
                {(props)=>(
                    <Form>
                        <Field as={TextField} 
                            fullWidth label="First Name" 
                            name = "firstName" 
                            required
                            helperText={<ErrorMessage name = "firstName">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField} 
                            fullWidth label="Last Name" 
                            name = "lastName"
                            required
                            helperText={<ErrorMessage name = "lastName">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField} 
                            fullWidth label="Email ID" 
                            name = "emailId" 
                            required
                            helperText={<ErrorMessage name = "emailId">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField} 
                            fullWidth label="Password" 
                            type="password" 
                            name = "password"  
                            required
                            helperText={<ErrorMessage name = "password">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Button style = {buttonStyle} 
                            type="submit" variant="contained" 
                            disabled = {props.isSubmitting}>
                            {props.isSubmitting?"Loading":"Sign Up"}</Button>
                        <Typography style = {typoStyle}>Already have an account?
                            <Link to = '/login'>
                                Login
                            </Link>
                        </Typography>
                            
                    </Form>
                )}
            </Formik>
        </Paper>
    </Grid>
        
    )
}
export default Registration