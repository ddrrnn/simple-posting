import React from 'react'
import { useState } from 'react';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword: ''
    });


    return (
        <div class="flex flex-col gap-3">
        <div class="glass flex flex-col w-full p-10 gap-3 rounded-box outline-primary">
            <label class="input input-bordered flex items-center gap-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" class="grow" placeholder="Email" 
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs,email:e.target.value})}
                />
            </label>

            <label class="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd" />
            </svg>
            <input type="password" class="grow" placeholder="Password" 
             value={inputs.password}
             onChange={(e) => setInputs({...inputs,password:e.target.value})}/>
            </label>

            {!isLogin ? (
                <label class="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd" />
                </svg>
                <input type="password" class="grow" placeholder="Confirm Password" 
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})
                }/>
            
                </label>
            ) : null}

            <button class="btn btn-primary">
                {isLogin ? "Log in" : "Sign Up"}
            </button>

            

            <div class="flex justify-center items-center my-2 gap-1">
                <div class="flex-2 h-[1px] w-full bg-gray-400 border-1 border-gray-500"></div>
                <p>OR</p>
                <div class="flex-2 h-[1px] w-full bg-gray-400 border-1 border-gray-500"></div>
            </div>

            <div class="flex justify-center align-center" >
                <button class="btn btn-secondary w-full">Log in with Google
                </button>
            </div>
            </div>
            
            <div class="flex justify-center items-center glass p-5 w-full gap-3 rounded-box outline-primary">
                <div class="mr-[5px]">
                {
                    isLogin ? "Don't have an account?" : "Already have an account?"
                }
                </div>
                <div class="text-[#ae6e6b] cursor-pointer"onClick={() => setIsLogin(!isLogin)}>
                {
                    isLogin ? "Sign up" : "Log in"
                }
                </div>
            </div>

            </div>
  )
}

export default AuthForm
