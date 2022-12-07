import { Button, Input } from 'antd'

import Form from 'antd/lib/form'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import s from "./Page1.module.scss"
const Page1 = () => {
  return (
    <div>
    <div className={`${s.enterdetails}`}>
      <h2>Enter Details Here!</h2>
      <>
      <div className={`${s.inputs}`}>
        <Form>
          <FormItem>
          <Input className={`${s.input_box}`}
            placeholder="NAME" 
            
          />
          </FormItem>
          <FormItem>
          <Input className={`${s.input_box}`}
            placeholder="Mobile"
            
          
          /></FormItem>
          <FormItem>
          <Input className={`${s.input_box}`}
            placeholder="Email"
            
          
          /></FormItem>
          </Form>
        </div>
        </>
      <div   >
     <div className={`${s.nextbox}`}>
        <Button className={`${s.Next}`}>
        Next
        </Button></div>
        
      </div>
    </div></div>
  )
}

export default Page1