/**
 * @module       Pages
 * @file         Register.jsx
 * @description  creates form for registration
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        9/07/2021
----------------------------------------------------------------------------------------------- */

import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { User } from '../service/user'
const user = new User()

const Registration = () => {
  const paperStyle = { padding: '30px 30px', width: 300, margin: '50px auto' }
  const headerStyle = { color: 'rgb(17, 127, 237)' }
  const avatarStyle = { backgroundColor: 'rgb(17, 127, 237)' }
  const buttonStyle = { margin: '40px 100px', backgroundColor: 'rgb(17, 127, 237)', color: 'white' }
  const typoStyle = { margin: 'auto 20px' }
  const initialValues = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: ''
  }

  /**
     * @description Validation schema for registartion page
     */
   const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, "First Name must have alteast three alphabets")
    .matches(/^[a-zA-Z]{3,}$/, "First Name must contain alphabets only").required("Required"),
    lastName: Yup.string().min(3, "Last Name must have alteast three alphabets")
    .matches(/^[a-zA-Z]{3,}$/, "First Name contain alphabets only").required("Required"),
    emailId: Yup.string().email("Enter a valid email id").required("Required"),
    password: Yup.string().min(8,"Password must be of atleast 8 characters")
})
  // eslint-diable-next-line //
  const onSubmit = (values, props) => {
    const userCredentials = {
      firstName: values.firstName,
      lastName: values.lastName,
      emailId: values.emailId,
      password: values.password
    }
    user.userRegistration(userCredentials)
      .then((res) => {
        console.log(res.data.message)
        console.log(res.data.data)
        alert('You are successfully registered!!')
      })
      .catch((error) => {
        console.log(error.message)
      })
    
    props.resetForm()
  }

  /**
     * @description creating registartion form
     */
  return (
        <Grid>
            <Paper elevation={ 10 } style = { paperStyle }>
                <Grid align='center'>
                <Avatar style = { avatarStyle } src='/broken-image.jpg' data-testid='avatar' />
                <h2 style = { headerStyle } data-testid = 'heading1'>Employee Payroll Application</h2>
                <h3 style = { headerStyle } data-testid = 'heading2'>Sign up</h3>
            </Grid>
            <Formik initialValues = { initialValues } onSubmit={ onSubmit } validationSchema = { validationSchema }>
                { (props) => (
                    <Form data-testid = 'form'>
                        <Field as={ TextField }
                            fullWidth label='First Name'
                            name = 'firstName'
                            required
                            data-testid = 'firstName'
                            helperText={ <ErrorMessage name = 'firstName'>{msg => <div style={{ color: 'red' }}>{ msg }</div> }</ErrorMessage> }/>
                        <Field as={ TextField }
                            fullWidth label='Last Name'
                            name = 'lastName'
                            required
                            data-testid = 'lastName'
                            helperText={ <ErrorMessage name = 'lastName'>{msg => <div style={{ color: 'red' }}>{ msg }</div>}</ErrorMessage>}/>
                        <Field as={ TextField }
                            fullWidth label='Email ID'
                            name = 'emailId'
                            required
                            data-testid = 'emailId'
                            helperText={<ErrorMessage name = 'emailId'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={ TextField }
                            fullWidth label='Password'
                            type='password'
                            name = 'password'
                            data-testid = 'password'
                            required
                            helperText={ <ErrorMessage name = 'password'>{ msg => <div style={{ color: 'red' }}>{ msg }</div> }</ErrorMessage> }/>
                        <Button style = { buttonStyle }
                            type='submit' variant='contained'
                            data-testid = 'submitButton'
                            // eslint-disable-next-line
                            disabled = {props.isSubmitting}>
                            {/* eslint-disable-next-line */}
                            {props.isSubmitting?'Loading':'Sign-up'}</Button>
                        <Typography style = { typoStyle }>Already have an account?
                            <Link data-testid='link' to = '/login'>
                                Login
                            </Link>
                        </Typography>
                    </Form>
                ) }
            </Formik>
        </Paper>
    </Grid>

  )
}

// eslint-disable-next-line
export default Registration