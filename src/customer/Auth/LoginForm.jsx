import React from 'react'
import { Grid,TextField,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../State/Auth/Action';



const LoginForm = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSubmit=(event)=>{
    event.preventDefault()
    const data=new FormData(event.currentTarget);
    const userData={
      email:data.get("email"),
      password:data.get("passWord")
    }
    dispatch(login(userData));
    console.log("user data: ",userData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} >
            
            <Grid item xs={12}  >
              <TextField  required id="email"  name="email" label="Email" fullWidth autoComplete='email'  />     
            </Grid>
            <Grid item xs={12}  >
              <TextField  required id="passWord"  name="passWord" label="Pass Word" fullWidth autoComplete='password'  />     
            </Grid>
            <Grid item xs={12} >
              <Button className=' w-full' type='submit' variant='contained' size='large'  sx={{padding:".8rem",bgcolor:""}} >
                Login
              </Button>
            </Grid>
        </Grid>
      </form>
      <div>
        <div className='py-3 flex items-center justify-center ' >
          <p>If you dont have an account ?</p>
          <Button onClick={()=>navigate("/register")} className="ml-5 " size='small'  >Register</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm