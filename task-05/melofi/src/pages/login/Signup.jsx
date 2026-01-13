import signupcss from "../../css/signup.module.css"
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
    return (   
            <div className={signupcss.loginBackground}>
        <div className={signupcss.loginBox}>

        <div className={signupcss.playerName}>
          <h1 className={signupcss.title}>MeloFi</h1>
        </div>
        {/* <div className={signupcss.inputDetails}> */}
        <form className={signupcss.form}>
            <div className={signupcss.inputFeilds}>
                <input type="text" className={signupcss.usernameInput} placeholder="username" />
                <input type="password" className={signupcss.passwordInput} placeholder="password"/>
                <input type="password" className={signupcss.repasswordInput} placeholder="re-enter password"/>
            </div>
              
            <button onClick={()=>navigate('/home')} className={signupcss.loginButton}>
                SIGN UP
            </button>
            <p className={signupcss.noAccount}>Already have an account {" "}<Link to="/login" className={signupcss.signupLink}>Log in</Link></p>
        </form>
        {/* </div> */}
        
        </div>
    </div>
     );
}
 
export default Signup;