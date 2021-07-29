import React from 'react'
import{Route, Switch} from 'react-router-dom'
import Registration from './pages/Registration';
import Login from './pages/Login'
import Error from './pages/Error'
import './App.scss'
import { Dashboard } from './components/Dashboard'
import AddEmployee from './components/AddEmp'
import List from './components/List'
import UpdateEmployee from './components/UpdateEmp'
require('dotenv').config()

const App = ()=>{
  return(
    <>
      <Switch>
        <Route path='/signup' component={Registration}/>
        <Route path='/login' component={Login}/>
        <Route component={Error}/>
      </Switch>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/dashboard/addEmp' component={AddEmployee}/>
      <Route path='/dashboard/list' component={List}/>
      <Route path='/dashboard/updateEmployee/:empId' component={UpdateEmployee}/>
    </>  
  )
}

export default App