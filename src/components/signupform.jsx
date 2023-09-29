// import React from 'react'
import { Formik ,Form,ErrorMessage,Field } from "formik";
import * as Yup from "yup"
import React, { useState } from 'react'


const signupform = () => {
const [firstname , setfirstName]=useState();
const [lastName , setlastName]=useState();
const [mail , setmail]=useState();
const [password , setpassword]=useState();
const [gender , setgender]=useState();





const initialValues={
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  gender:""

}
const onSubmit=(values)=>{
  console.log(values);
  const firstname=values.firstName;
  const lastName=values.lastName;
  const mail=values.email;
  const password=values.password;
  const gender=values.gender;

  setfirstName(firstname)
  setlastName(lastName)
  setmail(mail)
  setpassword(password)
  setgender(gender)
}

const onCancel=(values)=>{
console.log("ss"+values);


}

const validationSchema= Yup.object({
  firstName:Yup.string().required("FirstName is required"),
  lastName:Yup.string().required("lastname is required"),
  email:Yup.string().required("email is required")
                    .email("email is required"),
  password:Yup.string().required("password is required")


})
  return (
    <>
    <div className="mx-5 mt-5   d-flex flex-column  align-items-center">
      <h1>SignUp Form</h1>
    <Formik  initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
        { ()=>(
           <Form className=" w-25">
              <Field  className="form-control   mt-3" name="firstName"  placeholder="First Name"></Field>
              <ErrorMessage name="firstName" component="span"></ErrorMessage>
              <Field className="form-control  mt-3" name="lastName"  placeholder="Last Name"></Field>
              <ErrorMessage name="lastName" component="span"></ErrorMessage>
              <Field className="form-control  mt-3" name="email"  placeholder="Email"></Field>
              <ErrorMessage name="email" component="span"></ErrorMessage>
              <Field className="form-control  mt-3" name="password"  placeholder="password"></Field>
              <ErrorMessage name="password" component="span"></ErrorMessage><br />
             
              <Field type="radio" name="gender" value="male" id="male"/><label htmlFor="male">Male</label>
              <Field type="radio" name="gender" value="female" id="female"/><label htmlFor="female">FeMale</label><br />


              <button className="btn btn-primary btn-sm mx-2" type="submit">Submit</button>
              <button className="btn btn-danger btn-sm  " type="reset">Cancel</button>

           </Form>

        )}
    </Formik>
    </div>
  <div className="mt-5 text-center list-style-none">
    
  <ul className="list-group">
    <li>Firstname:  {firstname}</li>
    <li>Lastname:   {lastName}</li>
    <li>Email:   {mail}</li>
    <li>Password:   {password}</li>
    <li>Gender:  {gender}</li>
  </ul>
    
  </div>
    
    </>
  )
}

export default signupform