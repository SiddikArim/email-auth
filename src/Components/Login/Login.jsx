import React from 'react';
import google from '../../assets/Icon-Google.png'
import { GoogleAuthProvider, getAuth, signInWithPopup   } from "firebase/auth";
import app from '../Fire/Firebase.config';

const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user
            console.log('user vore deoa success', user)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div className='flex items-center justify-center mt-10'>
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>

                <form action="#" method="POST">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Login</button>
            <div className='w-10 h-10 mt-3' >
                <img onClick={handleGoogleLogin} src={google} alt="" />
            </div>
                </form>
            </div>
        </div>
    );
};

export default Login;