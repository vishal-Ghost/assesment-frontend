import React from 'react'
import {Avatar, Button, Card,CardContent,CardHeader, CircularProgress, Paper, TextField, Typography} from '@mui/material'
import { Lock } from '@mui/icons-material'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PostUserDataData } from '../../Stores/Actions/UserDataAct'

const SignupPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const UserDataRed = useSelector((state)=>state.UserDataRed)

  function handleSubmit(e){
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    dispatch(PostUserDataData(formData,navigate))

  }

  return (
    <div className='loginMainDiv'>
      {
        UserDataRed.err ? <p>{UserDataRed.err}</p> : 
        UserDataRed.loading ? <CircularProgress /> :

        <Card square={false} elevation={10} >
            <CardHeader title={
                <div style={{ textAlign: 'center' }}>
                    <Lock color='primary' />
                </div>

} />
            <CardContent>
                <form className='formDiv' onSubmit={handleSubmit}>
                <TextField autoFocus name='userEmail' type='email' label='Email' />
                <TextField  type='text' name='userName' label='Username' />
                <TextField type='password' name='password' label='Password' />
                <Button type='submit' variant='contained'>Sign up</Button>
                <Link to={'/'}>already have account?</Link>
                </form>
            </CardContent>
        </Card>
      }
    </div>
  )
}

export default SignupPage