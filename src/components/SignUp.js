import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

export default function SignUp() {
    const [errors, setErrors] = useState({});
    const [openSuccess, setOpenSuccess] = useState(false);
    const user = useSelector(state => state.user);
    const isLoggedIn = Object.keys(user).length !== 0;
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    });
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newErrors = { ...errors };

        for (let [name, value] of formData) {
            validate(name, value, newErrors);
        }

        if (Object.keys(newErrors).length !== 0) {
            setErrors(newErrors);
            return;
        }

        localStorage.setItem(formData.get('email'), JSON.stringify(Object.fromEntries(formData)));
        setOpenSuccess(true);
    };

    const validateComponent = (event) => {
        const newErrors = validate(event.target.name, event.target.value, { ...errors });
        setErrors(newErrors);
    };

    const validate = (name, value, newErrors, formData) => {
      let error = '';
  
      if (!value) {
          error = 'Value required!';
      } else {
          switch (name) {
              case 'email':
                  if (!validator.isEmail(value)) {
                      error = 'Please enter a proper Email ID';
                  }
                  break;
              case 'password':
                  if (value.length < 8) {
                      error = 'Password should have at least 8 characters';
                  }
                  break;
              case 'confirmPassword':
                  const password = formData.get('password');
                  if (password !== value) {
                      error = "Doesn't match with password";
                  }
                  break;
              case 'contactNumber':
                  if (!validator.isMobilePhone(value)) {
                      error = 'Please enter a proper contact number';
                  }
                  break;
              default:
                  break;
          }
      }
  
      if (error === '') {
          delete newErrors[name];
      } else {
          newErrors[name] = error;
      }
  
      return newErrors;
  };
  

    useEffect(() => {
        if (openSuccess) {
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [openSuccess]);

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input name="firstName" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name" onChange={validateComponent} />
                            {errors.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>}
                        </div>
                        <div>
                            <input name="lastName" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" onChange={validateComponent} />
                            {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>}
                        </div>
                        <div>
                            <input name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email Address" onChange={validateComponent} />
                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                        </div>
                        <div>
                            <input name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={validateComponent} />
                            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                        </div>
                        <div>
                            <input name="confirmPassword" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" onChange={validateComponent} />
                            {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
                        </div>
                        <div>
                            <input name="contactNumber" type="tel" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contact Number" onChange={validateComponent} />
                            {errors.contactNumber && <p className="mt-2 text-sm text-red-600">{errors.contactNumber}</p>}
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a></p>
                </div>
            </div>
        </div>
    );
}
