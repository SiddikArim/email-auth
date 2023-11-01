import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Fire/Firebase.config';
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const auth = getAuth(app);
    const handleRegister = (event) => {
        setError('')
        event.preventDefault();
        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorMessage = error.message;

                });
        }
        else {
            setError('bro hobe na tmk diye')
        }
    }
    console.log(email, password)
    return (
        <div>
            <div className='flex items-center justify-center mt-10'>
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-6">Register</h2>

                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type={show ? 'password' : 'text'} id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className='flex my-3'>
                            <input type="checkbox" onClick={() => setShow(!show)} /><label htmlFor="text" className="block text-gray-700 text-sm font-bold ml-2">Show Password</label>
                        </div>
                        <button type="submit" onClick={handleRegister} className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Login</button>
                        <p className='text-red-600 font-semibold ml-16'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;