import React from 'react'
import { Grid,TextField,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store);


  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt));
    }
  },[jwt,auth.jwt])

  const handleSubmit=(event)=>{
    event.preventDefault()
    const data=new FormData(event.currentTarget);
    const userData={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      email:data.get("email"),
      password:data.get("passWord")
    }
    dispatch(register(userData));
    console.log("user data: ",userData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6} >
              <TextField  required id="firstName"  name="firstName" label="First Name" fullWidth autoComplete='given-name'  />     
            </Grid>  
            <Grid item xs={12} sm={6} >
              <TextField  required id="lastName"  name="lastName" label="Last Name" fullWidth autoComplete='given-name'  />     
            </Grid> 
            <Grid item xs={12}  >
              <TextField  required id="email"  name="email" label="Email" fullWidth autoComplete='email'  />     
            </Grid>
            <Grid item xs={12}  >
              <TextField  required id="passWord"  name="passWord" label="Password" fullWidth autoComplete='password'  />     
            </Grid>
            <Grid item xs={12} >
              <Button className=' w-full' type='submit' variant='contained' size='large'  sx={{padding:".8rem",bgcolor:""}} >
                Register
              </Button>
            </Grid>
        </Grid>
      </form>

      <div>
        <div className='py-3 flex items-center justify-center ' >
          <p>If you already have an account ?</p>
          <Button onClick={()=>navigate("/login")} className="ml-5 " size='small'  >Login</Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm