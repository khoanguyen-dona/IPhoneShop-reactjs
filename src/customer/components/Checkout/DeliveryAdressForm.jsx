import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Grid, Button, Box, TextField } from '@mui/material'


const DeliveryAdressForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address={
            firstName:data.get('firstName'),
            lastName:data.get('lastName'),
            streetAddress:data.get('address'),
            city:data.get('city'),
            district:data.get('district'),
            zipCode:data.get('zip'),
            mobile:data.get('phoneNumber')
        }
        console.log('address',address)
    }
  return (
    <div className='' >
        <Grid container spacing={2} >
            <Grid xs={12} lg={5}  className='border rounded-md shadow-md h-[30rem] overflow-y-scroll  ' >
                <div className='p-5 border-b cursor-pointer ' >
                    <AddressCard/>
                    <Button sx={{mt:2,bgcolor:""}} size='large' variant='contained' >Deliver here</Button>
                </div>
            </Grid>

            <Grid item xs={12}  lg={7} >
                <Box className='border rounded-s-md shadow-md p-5 ' >
                    <form onSubmit={handleSubmit} >
                        <Grid container spacing={3} >
                            <Grid item xs={12} lg={6} >
                                <TextField  required  id='firstName' name='firstName' label='First Name' fullWidth  autoComplete='given-name' />
                            </Grid>
                            <Grid item xs={12} lg={6} >
                                <TextField  required  id='lastName' name='lastName' label='Last Name' fullWidth  autoComplete='given-name' />
                            </Grid>
                            <Grid item xs={12} lg={12} >
                                <TextField  required  id='address' name='address' label='Address' fullWidth  autoComplete='given-name' multiline
                                rows={4} />
                            </Grid>
                            <Grid item xs={12} lg={6} >
                                <TextField  required  id='city' name='city' label='City' fullWidth  autoComplete='given-name' />
                            </Grid>
                            <Grid item xs={12} lg={6} >
                                <TextField  required  id='district' name='district' label='District' fullWidth  autoComplete='given-name' />
                            </Grid>
                            <Grid item xs={12} lg={6} >
                                <TextField  required  id='zip' name='zip' label='Zip/Postal code' fullWidth  autoComplete='given-name' />
                            </Grid>
                            <Grid item xs={12} lg={6} >
                                <TextField  required  id='phoneNumber' name='phoneNumber' label='Phone Number' fullWidth  autoComplete='given-name' />
                            </Grid>
                            <Grid item xs={12}  lg={6} >
                                <Button size='large' type='submit' variant='contained' fullwidth >Deliver here</Button>
                            </Grid>
                            
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAdressForm