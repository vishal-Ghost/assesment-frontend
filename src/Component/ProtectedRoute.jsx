import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

  const LoginRed = useSelector((state)=>state.LoginRed)

  return (
    <>
    {
     LoginRed.val.valid ? <Outlet/> : <Navigate to={'/'}/>
    }
    </>
  )
}

export default ProtectedRoute