import React from 'react'
import{Grid, Paper, Avatar, TextField, Button} from '@material-ui/core'

const Registration = ()=>{
    const paperStyle = {padding: '30px 30px', width: 300, margin:"50px auto"}
    const headerStyle = {color:"rgb(17, 127, 237)"}
    const avatarStyle = {backgroundColor: "rgb(17, 127, 237)"}
    const buttonStyle = {margin:"40px 100px", backgroundColor: "rgb(17, 127, 237)", color:"white"}
    return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
                <Grid align="center">
                <Avatar style = {avatarStyle} src="/broken-image.jpg" />
                <h2 style = {headerStyle}>Employee Payroll Application</h2>
                <h3 style = {headerStyle}>Sign up</h3>
            </Grid>
            <form>
                <TextField fullWidth label="First Name" required/>
                <TextField fullWidth label="Last Name" required/>
                <TextField fullWidth label="Email ID" required/>
                <TextField fullWidth label="Password" type="password"  required/>
                <Button style = {buttonStyle} type="submit" variant="contained">Sign Up</Button>
            </form>    
            </Paper>
        </Grid>
        
    )
}
export default Registration