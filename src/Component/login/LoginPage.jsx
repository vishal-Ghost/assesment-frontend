import React from 'react'
import './loginPage.css'
import {Avatar, Button, Card,CardContent,CardHeader, Paper, TextField, Typography} from '@mui/material'
import { Lock } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FetchLoginData } from '../../Stores/Actions/LoginAct'


const LoginPage = () => {
    const dispatch = useDispatch()
const navigate = useNavigate()

const LoginRed = useSelector((state)=>state.LoginRed)


    function handleSubmit(e){
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const userName = formData.get('userName')
        const password = formData.get('password')
        dispatch(FetchLoginData(userName,password,navigate))
          }

  return (
    <div className='loginMainDiv'>
        {
            LoginRed.err ? <p>Something went wrong</p> : 
            LoginRed.loading ? <p>Loading...</p> : 

        <Card square={false} elevation={10} >
            <CardHeader title={
                <div style={{ textAlign: 'center' }}>
                    <Lock color='primary' />
                </div>

} />
            <CardContent>
                <form className='formDiv' onSubmit={handleSubmit}>
                <TextField autoFocus name='userName' type='text' label='Username' />
                <TextField type='password' name='password' label='Password' />
                <Button type='submit' variant='contained'>Login</Button>
                <div>
                <Link style={{margin:'10px'}} to={'/signUp'}>Create Account</Link>
                <Link>Forgot password</Link>
                </div>
                </form>
            </CardContent>
        </Card>
        }
    </div>
  )
}

export default LoginPage