import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from 'formik'
import Signupform from './components/signupform'
function App() {
  const [count, setCount] = useState(0)
      
  return (
    <>
    <Signupform/>
     {/* <h1 className='d-flex justify-content-center pt-4'>Customer Signup</h1>
     <div className='mx-auto w-25'>
     <form action="">
       <input type="text" placeholder='First Name' className="form-control  mt-2" />
       <input type="text" placeholder='Last Name'  className="form-control  mt-2"/>
       <input type="email" placeholder='Email ID'  className="form-control  mt-2"/>
       <input type="text" placeholder='mobile no'  className="form-control  mt-2"/>
       <input className="form-check-input" type="radio"  id="Male" name="gender" value="Male" /><label className="form-check-label px-2" htmlFor="Male">Male</label>
       <input className="form-check-input" type="radio"  id="Female" name="gender" value="Female" /><label className="px-2 form-check-label"  htmlFor="Female">Female</label><br />
       <div className='text-center'>
       <button className='btn btn-primary m-3'>Submit</button>
       <button className='btn btn-danger'>Cancel</button>
       </div>





       
       
      </form>

      </div>    */}
    </>
  )
}

export default App
