import { Navbar } from "components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import { signupReducer } from "reducer";
import axios from "axios";
import "./auth.css";
import { useAuth } from "context";


export const Signup = () => {

    const [signupState, signupDispatch ] = useReducer(signupReducer,{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''

    });

    
    const { firstName, lastName, email, password, confirmPassword } =  signupState;
    const { setUser } = useAuth();
    const [ error, setError ] = useState(false);
    const navigate = useNavigate();

    const signupHandler = async () =>
        {
            try
            {
                const  { data } = await axios.post("/api/auth/signup",{firstName, lastName, email, password, confirmPassword });
                const { createdUser, encodedToken } = data;
                localStorage.setItem("token", encodedToken);
                setUser(createdUser);
                navigate("/")
            }catch (err){
                setError("Something went wrong !!!")
            }

        };

    return (
        <div>

            <Navbar />
            <main className="flex-row">
                <div className="flex-column signup-div">
                    <h2 className="login-header">Sign Up</h2>
                    <form onSubmit={ signupHandler }>
                        <div className="credentials-div">
                            <label for="firstname" className="login-labels">First Name :
                            <input type="text" 
                            id="firstname" 
                            className="input-box" 
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(e) => signupDispatch({ type:"FIRST_NAME", payload:e.target.value})}
                            required={true}
                            /></label>
                        </div>
                        <div className="credentials-div">
                            <label for="lastname" className="login-labels">Last Name :
                            <input type="text" 
                            id="lastname" 
                            className="input-box" 
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(e) => signupDispatch({ type:"LAST_NAME", payload:e.target.value})}
                            required={true}
                            /></label>
                        </div>

                        <div className="credentials-div">
                            <label for="email" className="login-labels">Email address :
                            <input type="email" 
                            id="email" 
                            className="input-box" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => signupDispatch({ type:"EMAIL", payload:e.target.value})}
                            required={true}
                            /></label>
                        </div>

                        <div className="credentials-div">
                            <label for="password" className="login-labels">Password :
                            <input type="password" 
                            id="password" 
                            className="input-box" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => signupDispatch({ type:"PASSWORD", payload:e.target.value})}
                            required={true}
                            /></label>
                        </div>

                        <div className="credentials-div">
                            <label for="confirm-password" className="login-labels">Confirm Password :
                            <input type="password" 
                            id="confirm-password" 
                            className="input-box" 
                            placeholder="Password"
                            value={confirmPassword}
                            onChange={(e) => signupDispatch({ type:"CONFIRM_PASSWORD", payload:e.target.value})}
                            required={true}
                            /></label>
                        </div>

                        { confirmPassword.length > 0 && password !== confirmPassword && (
                            <span className="error-msg"> password not matching !!!</span>
                            
                        )}

                        { error && <p className="error-msg">{error}</p>}
                        
                        <button type="submit" className="btn solid-btn submit-btn login-btn">Create new account</button>

                        </form>
                    <div className="new-user">
                        <small className="new-user">Have an account ?</small>
                        <span><Link to="/login"><small className="new-user login-margin-l">Login</small></Link></span>
                    </div>      
                </div>       
                
            </main>
        </div>

    )
}