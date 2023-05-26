import React,{useState} from "react";
import "./Login.css"
import {Link,useNavigate} from "react-router-dom"
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth}  from './Firebase';
function Login() {
    const [history] = useNavigate();
    const [email,setEmail]=useState('');
    const [passward,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithAndPassword(email,passward)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,passward)
            .then((auth) =>{
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
  return (
    <div className="login">
        <Link to='/' style={{textDecoration:"none"}}>
            <div className="login__logo">
                <StorefrontIcon className="login__logoImage" fontSize="large"/>
                <h2 className="login__logoTitle">eSHOP</h2>
            </div>
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={passward} onChange={e=> setPassword(e.target.value)}/>
                <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the eShop Website Conditions of use & sale.please see our Privacy Notice, our Cookies Notice and our Interest-based ads Notice.
            </p>

            <button className="login__registerButton" onClick={register}>Create your eShop Account</button>
        </div>
    </div>
  )
}

export default Login
