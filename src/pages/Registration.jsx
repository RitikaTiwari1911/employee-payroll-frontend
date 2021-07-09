import React from 'react'
import{Grid, Paper, Avatar, TextField, Button} from '@material-ui/core'

const Registration = ()=>{
    return (
        <Grid>
            <Paper elevation={20}>
                <Grid align="center">
                <Avatar src="/broken-image.jpg" />
                <h2>Employee Payroll Application</h2>
            </Grid>
            <form>
                <TextField fullWidth label="First Name"  required/>
                <TextField fullWidth label="Last Name"  required/>
                <TextField fullWidth label="Email ID"  required/>
                <TextField fullWidth label="Password" type="password"  required/>
                <Button type="submit" variant="contained">Sign Up</Button>
            </form>    
            </Paper>
        </Grid>
        
    )
}
export default Registration