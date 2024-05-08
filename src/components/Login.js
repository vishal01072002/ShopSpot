import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Login() {
    const [errors, setErrors] = useState({});
    const user = useSelector(state => state.user);
    const [openFailure, setOpenFailure] = useState(false);
    const [openPasswordFailure, setOpenPasswordFailure] = useState(false);
    const isLoggedIn = Object.keys(user).length !== 0;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData = {};
        const newErrors = { ...errors };
        for (let [name, value] of data) {
            formData[name] = value;
            validate(name, value, newErrors);
        }
        if (Object.keys(newErrors).length !== 0) {
            setErrors(newErrors);
            return;
        }
        const userData = JSON.parse(localStorage.getItem(formData.email));
        if (userData === null) {
            setOpenFailure(true);
            return;
        }
        if (userData.password !== formData.password) {
            setOpenPasswordFailure(true);
            return;
        }
        dispatch({ type: 'login', payload: userData });
    };

    const validateComponent = (event) => {
        const newErrors = validate(event.currentTarget.name, event.currentTarget.value, { ...errors });
        setErrors(newErrors);
    }

    const validate = (name, value, newErrors) => {
        let error = '';
        if (!value) {
            error = 'Value required!'
        } else {
            switch (name) {
                case 'email':
                    if (!validator.isEmail(value)) {
                        error = 'Please enter a proper Email ID'
                    }
                    break;
            }
        }
        if (error === '') {
            delete newErrors[name]
        } else {
            newErrors[name] = error;
        }
        return newErrors;
    }

    if (openFailure) {
        setTimeout(() => {
            setOpenFailure(false);
        }, 2000);
    }
    if (openPasswordFailure) {
        setTimeout(() => {
            setOpenPasswordFailure(false);
        }, 2000);
    }

    const handleForgetPassword = () => {
        navigate('/Forgetpass');
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={validateComponent} />
                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={validateComponent} />
                            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <Button onClick={handleForgetPassword} className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </Button>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 3.75a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M4.75 10a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3A.75.75 0 004.75 10z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M15.25 10a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M5.553 2.447a.75.75 0 011.061 1.06L4.561 9h14.878a.75.75 0 010 1.5H4.561l1.053 5.493a.75.75 0 11-1.422.4L3.14 10.5a.75.75 0 010-1.414l1.052-5.497a.75.75 0 01.401-.392z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm text-gray-600">Don't have an account? <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}
