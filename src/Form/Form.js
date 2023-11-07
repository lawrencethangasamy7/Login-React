import React,{useState} from 'react'
import FebLogo from "../images/fablogic-logo-final.png"
import "../Form/Form.css"
import { useForm } from "react-hook-form";



const Form= () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        reset();
    
      };
    

  return (
    <div className='feedback-sec'>
       <div className='feedback-form' >
            <div className='heder '>
                <div className='col-lg-12 col-md-12 col-sm-12 head-logo text-center'>
                    <img src={FebLogo} />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 head-title pt-3 text-center'>
                    <h1>Login</h1>
                </div>
            </div>
            <div className='row box-input'>
            <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className="input">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            {...register("name", {
                            required: true,
                            })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <p className="errorMsg">name is required.</p>
                        )}
                        {errors.name && errors.name.type === "" && (
                            <p className="errorMsg">name is not valid.</p>
                        )}
                    </div> */}
                    <div className="input">
                        <label>Email *</label>
                        <input
                            type="text"
                            name="email"
                            {...register("email", {
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                            })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <p className="errorMsg">Email is required.</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <p className="errorMsg">Email is not valid.</p> 
                        )}
                    </div>
                    <div className="input">
                    <label>Password *</label>
                    <input
                        type="password"
                        name="password"
                        {...register("password", {
                        required: true,
                        minLength: 6
                        })}
                    />
                    {errors.password && errors.password.type === "required" && (
                        <p className="errorMsg">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="errorMsg">
                             Password should be at-least 6 characters.
                        </p>
                    )}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        <div className="btn-subt text-center">
                            <button type="submit">Submit</button>
                        </div>
                        <div className='pass-btn pt-4 text-center'>
                            <a href=" ">Forget Password?</a> 
                        </div>
                        <div className='opction-para text-center pt-3 ' >
                            <p>OR</p>
                        </div>
                            
                        <div className='btn-subt  pt-3 pb-3'>
                            <button type="submit">Create New Account</button>   
                        </div> 
                    </div>    
                </form>
            </div>   
            {/* <div className='footer'>
                <div className='footer-con text-center'>
                    <p>Copyright @2023 FabLogic</p>
                </div>
            </div>   */}
        </div>
    </div>
  )
}

export default Form
