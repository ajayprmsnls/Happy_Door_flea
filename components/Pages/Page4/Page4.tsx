import { Button, Form } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import s from "./Page4.module.scss"
export const Page4 = () => {
  return (
    <div className={`${s.guest}`}>
        <h3 className={`${s.title}`}>Guests Details</h3>
        <div className={`${s.guest1}`}>
        <Form >
            
            <h5>Guest 1</h5>
            <FormItem>
                <input className={`${s.name}`} placeholder='Name'></input>
            </FormItem>
            <FormItem className={`${s.get}`}>
                <input className={`${s.Mobile}`} placeholder='Mobile'></input>
                <input className={`${s.Email}`} placeholder='Email id'></input>
            </FormItem>
            <hr  className={`${s.line}`} ></hr>
            
        </Form>
        </div>
      
        <div className={`${s.guest2}`}>
        <Form >
            
            <h5>Guest 2</h5>
            <FormItem>
                <input className={`${s.name}`} placeholder='Name'></input>
            </FormItem>
            <FormItem className={`${s.get}`}>
                <input className={`${s.Mobile}`} placeholder='Mobile'></input>
            
                <input className={`${s.Email}`} placeholder='Email id'></input>
            </FormItem>
            <hr  className={`${s.line2}`} ></hr>
        </Form>
        </div>
      
        <div className={`${s.guest3}`}>
        <Form >
            
            <h5>Guest 3</h5>
            <FormItem>
                <input className={`${s.name}`} placeholder='Name'></input>
            </FormItem>
            <FormItem className={`${s.get}`}>
                <input className={`${s.Mobile}`} placeholder='Mobile'></input>
                
                <input className={`${s.Email}`} placeholder='Email id'></input>
            </FormItem>
            <hr  className={`${s.line2}`} ></hr>
        </Form>
        </div>
        <div className={`${s.nextbox}`}>
        <Button className={`${s.Next}`}>
        Next
        </Button></div>

    </div>
  )
}
export default Page4
