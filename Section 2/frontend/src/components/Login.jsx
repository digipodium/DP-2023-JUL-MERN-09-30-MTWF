import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import {motion} from 'framer-motion';
import useUserContext from "../UserContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});

const Login = () => {

  const {setLoggedIn} = useUserContext();

  // Initializing formik
  const loginForm = useFormik({
    initialValues: {
      email : "",
      password : ""
    },
    onSubmit : async ( values, {resetForm} ) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Nice!',
          text : 'Logged in Successfully 😎'
        });

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data) );
        setLoggedIn(true);
        resetForm();

      }else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Email or Password is incorrect 😢'
        })
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Something went wrong'
        })
      }

      // write code to submit form to server
    },

    validationSchema : LoginSchema
  });

  return (
    <motion.div 
    className="bg"
      initial={{opacity: 0, x: '100%' }}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: '-100%'}}
      transition={{duration: 0.3, type: 'spring', stiffness: 50, damping: 10}}
    >
      <div className="w-25">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Login Form</h3>
            <hr />

            <form onSubmit={loginForm.handleSubmit}>
              <label htmlFor="">Email Address</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{loginForm.errors.email}</span>
              <input type="email" className="form-control mb-3" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />

              <label htmlFor="">Password</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{loginForm.errors.password}</span>
              <input type="password" className="form-control mb-3" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />

              <button className="btn btn-primary w-100 mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
