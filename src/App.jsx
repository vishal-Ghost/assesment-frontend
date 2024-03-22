import React from 'react'
import LoginPage from './Component/login/LoginPage'
import { Route, Routes } from 'react-router'
import SignupPage from './Component/signup/SignupPage'
import ProtectedRoute from './Component/ProtectedRoute'
import Intro from './Component/Intro'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/signUp' element={<SignupPage/>}/>
      <Route element={<ProtectedRouteWithNavbar/>}>
        <Route path='/intro' element={<Intro/>} />
      </Route>
    </Routes>
    </>
  )
}

const ProtectedRouteWithNavbar = () => {
  return (
    <>
      <ProtectedRoute />
    </>
  );
};

export default App