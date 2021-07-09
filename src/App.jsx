import React from 'react'
import{Route, Switch} from 'react-router-dom'
import Registration from './pages/Registration';
import Login from './pages/Login'
import "../src/App.css"
const App = ()=>{
  return(
    <>
      <Switch>
        <Route path='/signup' component={Registration}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </>  
  )
}

export default App