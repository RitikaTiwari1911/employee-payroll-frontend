/**
 * @module       Components
 * @file         UpdateEmp.jsx
 * @description  updates employee
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        22/07/2021
----------------------------------------------------------------------------------------------- */

import React, { Component } from "react";
import { Grid, Paper, TextField, Button, Avatar } from "@material-ui/core";
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
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        if(this.props.match && this.props.match.params.empId) {
            const empId = this.props.match.params.empId
            employee.readAllData(empId)
            .then((response) => {
                const result = response.data.data;
                //const empId = this.props.match.params.empId;
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
        const empId = this.props.match.params.empId;
        employee.updateEmp(empDetails, empId).then((res) => {
            console.log(res.data.message);
        }).catch(error => {
            console.log(error.message)
        })
    }
    render() {
        const paperStyle = { padding: '30px 30px', width: 300, margin: '50px auto' }
        const headerStyle = { margin: '20px 30px', color: 'rgb(17, 127, 237)' }
        const avatarStyle = { backgroundColor: 'rgb(17, 127, 237)', margin: 'auto 100px'}
        const buttonStyle = { margin: '40px 80px 10px ', backgroundColor: 'rgb(17, 127, 237)', color: 'white' }
        return (
            <Grid>
                <Paper elevation={20} style={paperStyle} >
                <Avatar style = { avatarStyle } src='/broken-image.jpg' data-testid='avatar' />
                    <h2 style={headerStyle} className="title">
                        Update Employee
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