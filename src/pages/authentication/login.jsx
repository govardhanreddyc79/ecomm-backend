import { Navbar } from "components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import "./auth.css";
import { useAuth } from "context";

export const Login = () => {
    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ togglePassword, setTogglePassword ] = useState(false);
    const [ error, setError ] = useState("");
    
    const { setUser } = useAuth();

    const navigate = useNavigate();

    const loginHandler = async (event) => {
        event.preventDefault()
        try
            {
                const { data } = await axios.post("/api/auth/login",{email, password});
                const { foundUser, encodedToken } = data;
                setUser(foundUser)
                localStorage.setItem("token", encodedToken)
                navigate('/');
            }catch(error)
                {
                    setError("Alert!!!, Check your credentials")
        }

    };

    const dummyUserLogin = () => {
        setEmail("adarshbalika@gmail.com");
        setPassword("adarshBalika123");
      };

    return (
        <div>

            <Navbar />
            <main className="flex-row">
                <div className="flex-column login-div">
                    <h2 className="login-header">Login</h2>
                    <form onSubmit={loginHandler}>
                        <div className="credentials-div">
                            <label htmlFor="email" className="login-labels">Email address :
                            <input type="email"
                             id="email" 
                             className="input-box" 
                             placeholder="Enter your email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             required={true}
                             /></label>
                        </div>

                        <div className="credentials-div">
                            <label htmlFor="password" className="login-labels">Password :
                            <input type= { togglePassword ? "text" : "password" } 
                             id="password" 
                             className="input-box" 
                             placeholder="Password" 
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                             required={true}
                            />
                            <span onClick={() => setTogglePassword(!togglePassword)}>
                            { togglePassword ? ( <i class="fa-solid fa-eye password-icon"></i>) :
                                            ( <i class="fa-solid fa-eye-slash password-icon"></i>)}
                                
                            </span>
                            </label>
                            
                            
                        </div>

                        { error && <p className="error-msg">{error}</p>}
                        
                        <button type="submit" className="btn solid-btn submit-btn login-btn">Login</button>                        

                    </form>
                    <button className="btn solid-btn submit-btn login-btn" 
                        onClick={dummyUserLogin}>Login with dummy user</button>

                    <div className="new-user">
                        <small className="new-user">New User ?</small>
                        <span><Link to="/signup"><small className="new-user login-margin-l">Create new account</small></Link></span>
                    </div>      
                </div>       
                
            </main>
        </div>

    )
}