import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Registration = () => {
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
    department: Yup.string().required('Required'),
    salary: Yup.number().required('Required'),
    emailId: Yup.string().email('Enter a valid email id').required('Required')
  })
  const onSubmit = (values, props) => {
    console.log(values)
    setTimeout(() => {
    // eslint-disable-next-line
      props.resetForm()
      // eslint-disable-next-line
      props.setSubmitting(false)
    }, 2000)
    console.log(props)
  }

  return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
                <Grid align='center'>
                <Avatar style = {avatarStyle} src='/broken-image.jpg' />
                <h2 style = {headerStyle}>Add new Employee</h2>
            </Grid>
            <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
                {(props) => (
                    <Form>
                        <Field as={TextField}
                            fullWidth label='First Name'
                            name = 'firstName'
                            required
                            helperText={<ErrorMessage name = 'firstName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField}
                            fullWidth label='Last Name'
                            name = 'lastName'
                            required
                            helperText={<ErrorMessage name = 'lastName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField}
                            fullWidth label='Department'
                            name = 'department'
                            required
                            helperText={<ErrorMessage name = 'department'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField}
                            fullWidth label='Salary'
                            name = 'salary'
                            required
                            helperText={<ErrorMessage name = 'salary'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField}
                            fullWidth label='Email ID'
                            name = 'emailId'
                            required
                            helperText={<ErrorMessage name = 'emailId'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Button style = {buttonStyle}
                            type='submit' variant='contained'
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

// eslint-disable-next-line
export default Registration