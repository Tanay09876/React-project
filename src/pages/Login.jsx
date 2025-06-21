import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { Link } from 'react-router-dom';



function Login () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-violet-700 dark:bg-gray-900">
      <div className="bg-indigo-500 dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white  mb-6">
         🔐Welcome Back
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your password"
            />
          </div>
           <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                              <input type="checkbox" id="remember" name="remember" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 " />
                                                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-200 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-gray-200">Forgot password?</a>
                  </div>

          <button
            type="submit"
            className="w-full text-lg font-bold bg-white text-blue-700  py-2 rounded-md transition"
          >
           🚀 Login
          </button>
        </form>

        <p className="text-base text-center mt-4 text-gray-100">
          Don’t have an account? 
          <Link to ="/signup" className="text-yellow-500 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
   
};

export default Login;
