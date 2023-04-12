import React, { useState } from "react";
import Form from "../../layouts/Form";
import { Grid } from "@material-ui/core";
import Input from "../../controls/Input";
import Select from "../../controls/Select";


const pMethods = [
    { id: "none", title: "select" },
    { id: "Cash", title: "Cash" },
    {
      id: "Card",
      title: "Card",
    },
  ];
  const generateorderNumber = () =>
    Math.floor(100000 + Math.random() * 900000).toString();
  const getFreshModelObject = () => ({
    orderMasterId: 0,
    orderNumber: generateorderNumber(),
    customerId: 0,
    pMethod: "none",
    gTotal: 0,
    deletedOrderItemIds: "",
    orderDetails: [],
  });
const Orderform = () => {
   const [values,setValues]=useState(getFreshModelObject());
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input disabled  name="orderNumber" 
          value={values.orderNumber}/>
          <Select 
             label="Customer"
             name="customerId"
             options={
                [

                ]
             }/>
        </Grid>
        <Grid item xs={6}>
            <Select label="Payment Method"
                    name="pmethod"
                    value={values.pMethod}
                    options={pMethods}
                    />
          <Input disabled name="gTotal" 
             value={values.orderNumber}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default Orderform;
