/**
 * @module       Components
 * @file         Addmp.jsx
 * @description  adds employee
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        22/07/2021
----------------------------------------------------------------------------------------------- */
import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Employee } from '../service/employee'
const employee = new Employee();

const AddEmployee = () => {
  const paperStyle = { padding: '30px 30px', width: 300, margin: '50px auto' }
  const headerStyle = { color: 'rgb(17, 127, 237)' }
  const avatarStyle = { backgroundColor: 'rgb(17, 127, 237)' }
  const buttonStyle = { margin: '40px 100px', backgroundColor: 'rgb(17, 127, 237)', color: 'white' }
  const initialValues = {
    firstName: '',
    lastName: '',
    department: '',
    salary: '',
    emailId: ''
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'First Name must have alteast three alphabets')
      .matches(/^[a-zA-Z]{3,}$/, 'First Name must contain alphabets only').required('Required'),
    lastName: Yup.string().min(3, 'Last Name must have alteast three alphabets')
      .matches(/^[a-zA-Z]{3,}$/, 'First Name contain alphabets only').required('Required'),
    salary: Yup.number().required('Required'),
    department: Yup.string().required('Required'),
    emailId: Yup.string().email('Enter a valid email id').required('Required')
  })
  const onSubmit = (values, props) => {
    const empDetails = {
      firstName: values.firstName,
      lastName: values.lastName,
      department: values.department,
      salary: values.salary,
      emailId: values.emailId
    };

    employee.createEmp(empDetails).then((res) => {
      alert(res.data.message);
      console.log(res.data.message)
      console.log(res.data.data)
    })
    .catch((error) => {
      console.log(error,'Some error occurred while adding the employee')
    });
    props.resetForm()
  }

  return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
                <Grid align='center'>
                <Avatar style = {avatarStyle} src='/broken-image.jpg' data-testid='avatar' />
                <h2 style = {headerStyle} data-testid = 'heading1'> Add new Employee</h2>
            </Grid>
            <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
                {(props) => (
                    <Form data-testid='form'>
                        <Field as={TextField}
                            fullWidth label='First Name'
                            name = 'firstName'
                            data-testid = 'firstName'
                            required
                            helperText={<ErrorMessage name = 'firstName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField}
                            fullWidth label='Last Name'
                            name = 'lastName'
                            data-testid = 'lastName'
                            required
                            helperText={<ErrorMessage name = 'lastName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField}
                            fullWidth label='Department'
                            name = 'department'
                            data-testid = 'department'
                            required
                            helperText={<ErrorMessage name = 'department'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField}
                            fullWidth label='Salary'
                            name = 'salary'
                            data-testid = 'salary'
                            required
                            helperText={<ErrorMessage name = 'salary'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField}
                            fullWidth label='Email ID'
                            name = 'emailId'
                            data-testid = 'emailId'
                            required
                            helperText={<ErrorMessage name = 'emailId'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Button style = {buttonStyle}
                            type='submit' variant='contained'
                            data-testid = 'submitButton'
                            // eslint-disable-next-line
                            disabled = {props.isSubmitting}>
                            {/* eslint-disable-next-line */}
                            {props.isSubmitting?'Loading' : 'Add'}</Button>
               </Form>
                )}
            </Formik>
        </Paper>
    </Grid>
  )
}


export default AddEmployee