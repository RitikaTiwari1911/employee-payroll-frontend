/**
 * @module       Components
 * @file         EmpList.jsx
 * @description  shows all the employees 
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        19/07/2021
----------------------------------------------------------------------------------------------- */
import React,{ useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Employee } from '../service/employee'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom'
const employee = new Employee()

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const tableStyle = {
  padding: "30px 20px",
  width: 1000, margin: "40px 300px",
  elevation: 30
}

export default function List(){
  const actionStyle = {color: 'black', margin: '10px 0px 10px 15px'}

  let [emp, setEmp] = useState([]);
  const classes = useStyles();

  const loadEmp = () =>{
      employee.readAllData().then((res) =>{
          if (res.data.success === true) {
              setEmp(res.data.data);
          }
          else{
              alert('Some error occurred!')
              console.log('Some error occurred!')
          }
      }).catch((error) => {
          console.log(error.message)
      })
  }

  useEffect(() => {
      loadEmp();
  }, []);

  const removeEmp = (empId) => {
    employee.deleteEmp(empId).then((res)=> {
      console.log(res);
      alert(res.data.message);
    }).catch((error)=>{
        console.log(error.message);
    });
  loadEmp();
  }

  return (
    <TableContainer component={Paper} style={tableStyle}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Salary</StyledTableCell>
            <StyledTableCell align="right">Email Id</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emp.map((employee) => (
            <StyledTableRow key={employee.name}>
              <StyledTableCell component="th" scope="employee">
                {employee.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.lastName}</StyledTableCell>
              <StyledTableCell align="right">{employee.department}</StyledTableCell>
              <StyledTableCell align="right">{employee.salary}</StyledTableCell>
              <StyledTableCell align="right">{employee.emailId}</StyledTableCell>
              <Link onClick={() => {
                removeEmp(employee._id)
              }}><DeleteIcon style = {actionStyle}/></Link>
              <Link to = {`/Dashboard/UpdateEmployee/${employee._id}`}><EditIcon style = {actionStyle}/></Link>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}