import React from 'react'

import { Stepper, Step, StepLabel } from '@mui/material'

const steps=[
    'Placed',
    'Order Confirmed',
    'Shipped',
    'Out for Delivery',
    'Delivered'
]


const OrderTracker = ({activeStep}) => {
  return (
    <div  className='w-full' >
        <Stepper activeStep={activeStep} alternativeLabel orientation="horizontal" >
            {steps.map((label)=>
            <Step>
                <StepLabel sx={{fontSize:''}} >{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker