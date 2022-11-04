import { useState } from "react";
import "./Login.css";
import { Link,  } from "react-router-dom";
import {UserAuth} from '../AuthContext'
import { useNavigate } from "react-router-dom";
import Flash from '../Flash'
function Login() {

  const {signInUser} = UserAuth()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState()
  const [errorStatus, setStatusCode] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit =async(e)=>{
    e.preventDefault()


      signInUser(user.email, user.password)
      .then(()=>{
        setStatusCode(200)
        
        navigate('/')
      })
      .catch(err=>{
        setError('Something is wrong')
        console.log(err)

      })


  }
  return (
    <div className="login__window border rounded p-5 container text-white">
      <h1 className="text-center">Login </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn mt-3 btn-success">
          Login
        </button>
      {/* error */}

      {error && <Flash message={error} statusCode={errorStatus}></Flash>}
        <p className="text-muted mt-3">
          Don't have an account{" "}
          <Link to="/signup" className="text-success">
            Create new Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
