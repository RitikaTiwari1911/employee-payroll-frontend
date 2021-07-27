/**
 * @module       Components
 * @file         AddEmp.jsx
 * @description  adds employee
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        22/07/2021
----------------------------------------------------------------------------------------------- */
//import React, { useState, useEffect } from 'react'
//import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
//import { Formik, Form, Field, ErrorMessage } from 'formik'
//import * as Yup from 'yup'
//import { Employee } from '../service/employee'
//import { useHistory, useParams } from 'react-router'
//const employee = new Employee();
//
//const UpdateEmp = () => {
//    const history = useHistory()
//    const { empId } = useParams()
//    const paperStyle = { padding: '30px 30px', width: 300, margin: '50px auto' }
//    const headerStyle = { color: 'rgb(17, 127, 237)' }
//    const avatarStyle = { backgroundColor: 'rgb(17, 127, 237)' }
//    const buttonStyle = { margin: '40px 80px', backgroundColor: 'rgb(17, 127, 237)', color: 'white' }
//    const initialValues = {
//      firstName: '',
//      lastName: '',
//      department: '',
//      salary: '',
//      emailId: ''
//    };
//    const [empDetails, setEmp] = useState(initialValues)
//
//    useEffect(() => {
//        employee.readAllData(empDetails, empId).then((res) => {
//            setEmp(res.data.data);
//        }).catch(error => {
//            console.log(error);
//        });
//    });
//
//    const onSubmit = (event, props) => {
//        //event.preventDefault();
//        employee.updateEmp(empDetails, empId).then((res) => {
//                setEmp(res.data.data);
//                alert(res.data.message);
//                history.push("/dashboard/List");
//            })
//            .catch((error) => {
//                console.log(error);
//            });
//        props.resetForm();
//    };
//    let {firstName,lastName,salary,department,emailId}=empDetails;
//
//    const onInputChange = (e) => {
//        console.log(empDetails);
//        setEmp({...empDetails, [e.target.name]: e.target.value });
//        console.log(empDetails);
//    }
//
//    const validationSchema = Yup.object().shape({
//        firstName: Yup.string().min(3, 'First Name must have alteast three alphabets')
//          .matches(/^[a-zA-Z]{3,}$/, 'First Name must contain alphabets only'),
//        lastName: Yup.string().min(3, 'Last Name must have alteast three alphabets')
//          .matches(/^[a-zA-Z]{3,}$/, 'First Name contain alphabets only'),
//        salary: Yup.number(),
//        department: Yup.string(),
//        emailId: Yup.string().email('Enter a valid email id')
//      })
//
//      return (
//        <Grid>
//            <Paper elevation={10} style = {paperStyle}>
//                <Grid align='center'>
//                <Avatar style = {avatarStyle} src='/broken-image.jpg' />
//                <h2 style = {headerStyle}>Update Employee</h2>
//            </Grid>
//            <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
//                {(props) => (
//                    <Form>
//                        <Field as={TextField}
//                            fullWidth label='First Name'
//                            name = 'firstName'
//                            value={firstName}
//                            onChange={e => {onInputChange(e)}}
//                            helperText={<ErrorMessage name = 'firstName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
//                        <Field as={TextField}
//                            fullWidth label='Last Name'
//                            name = 'lastName'
//                            value={lastName}
//                            onChange={e => onInputChange(e)}
//                            helperText={<ErrorMessage name = 'lastName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
//                        <Field as={TextField}
//                            fullWidth label='Department'
//                            name = 'department'
//                            value={department}
//                            onChange={e => onInputChange(e)}
//                            helperText={<ErrorMessage name = 'department'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
//                        <Field as={TextField}
//                            fullWidth label='Salary'
//                            name = 'salary'
//                            value={salary}
//                            onChange={e => onInputChange(e)}
//                            helperText={<ErrorMessage name = 'salary'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
//                        <Field as={TextField}
//                            fullWidth label='Email ID'
//                            name = 'emailId'
//                            value={emailId}
//                            onChange={e => onInputChange(e)}
//                            helperText={<ErrorMessage name = 'emailId'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
//                        <Button style = {buttonStyle}
//                            type='submit' variant='contained'
//                            // eslint-disable-next-line
//                            disabled = {props.isSubmitting}>
//                            {/* eslint-disable-next-line */}
//                            {props.isSubmitting?'Loading' : 'Update'}</Button>
//               </Form>
//                )}
//            </Formik>
//        </Paper>
//    </Grid>
//  )
//}
//
//
//export default UpdateEmp
//  


import React, { Component } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Employee } from '../service/employee';
const employee = new Employee();


export default class UpdateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            salary: '',
            department: '',
            emailId: '',
            isError: {
                firstName: '',
                lastName: '',
                salary: '',
                department: '',
                emailId: '',
            }
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        const empId = this.props.match.params.employeeId;
        employee.updateEmp(empId)
            .then((response) => {
                const result = response.data.data;
                if (response.data.success === true) {
                    this.setState({
                        firstName: result.firstName,
                        lastName: result.lastName,
                        salary: result.salary,
                        department: result.department,
                        emailId: result.emailId
                    });
                }
                else {
                    alert("Employee not found!!")
                }
            }).catch((error) => {
                console.log(error.message);
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const empDetails = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            salary: this.state.salary,
            department: this.state.department,
            emailId: this.state.emailId,
        };
        const empId = this.props.match.params.employeeId;
        employee.updateEmp(empDetails, empId).then((res) => {
            console.log(res.data.message);
        }).catch(error => {
            console.log(error.message)
        })
    }
    render() {
        const paperStyle = { padding: '30px 30px', width: 300, margin: '50px auto' }
        const headerStyle = { color: 'rgb(17, 127, 237)' }
        //const avatarStyle = { backgroundColor: 'rgb(17, 127, 237)' }
        const buttonStyle = { margin: '40px 100px', backgroundColor: 'rgb(17, 127, 237)', color: 'white' }
        return (
            <Grid>
                <Paper elevation={20} style={paperStyle} >
                    <h2 style={headerStyle} className="title">
                        Update Employee Details
                    </h2><br />
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            fullWidth
                            name="firstName"
                            label="First Name"
                            value={this.state.firstName}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            style={{ padding: "5px" }}
                            name="lastName"
                            label="Last Name"
                            value={this.state.lastName}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            name="salary"
                            label="Salary"
                            value={this.state.salary}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            name="department"
                            label="Department"                            
                            value={this.state.department}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            name="emailId"
                            label="Email ID"
                            value={this.state.emailId}
                            onChange={this.onInputChange}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={buttonStyle}
                        >
                            Update
                        </Button>
                    </form>
                </Paper>
            </Grid>
        )
    }
}