import React from 'react'
import Form from '../../layouts/Form'
import { Grid } from '@material-ui/core'
import Input from '../../controls/Input'

const Orderform = () => {
  return (
          <Form>
            <Grid container>
               <Grid item xs={6}>
                 <Input 
                       disabled 
                       label="Order Number"
                       name="orderNumber"
                   />
               </Grid>
               <Grid item xs={6}>
                 <Input 
                       disabled 
                       label="Grand Total"
                       name="gTotal"
                   />
               </Grid>
            </Grid>
            </Form>
    
  )
}

export default Orderform