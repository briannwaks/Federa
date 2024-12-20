


import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="container py-5">
        
        <div className="text-center">
          <img
            src="/public/federalogo2.png" 
            alt="Logo"
            className="login-logo"
          />
        </div>

        
        <h2 className="text-center mt-4">Sign Into Your Account</h2>

        {/* Form */}
        <form className="login-form mx-auto mt-4">
        
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <a href="#!" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>

        
          <div className="text-center">
            <button type="submit" className="btn btn-purple ">
              Sign-In
            </button>
          </div>

        
          <p className="text-center mt-3">
            Don’t have an account?{' '}
            <span className="highlighted-text">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

