import logincss from "../../css/login.module.css"
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";



function Login(){
    const navigate = useNavigate();
    return(
    <div className={logincss.loginBackground}>
        <div className={logincss.loginBox}>

        <div className={logincss.playerName}>
          <h1 className={logincss.title}>MeloFi</h1>
        </div>
        {/* <div className={logincss.inputDetails}> */}
        <form className={logincss.form}>
            <div className={logincss.inputFeilds}>
                <input type="text" className={logincss.usernameInput} placeholder="username" />
                <input type="password" className={logincss.passwordInput} placeholder="password"/>
                <Link to="/forgot-password" className={logincss.forgotPasswordLink}>
                    Forgot password?
                </Link>

            </div>
              
            <button onClick={()=>navigate('/home')} className={logincss.loginButton}>
                LOG IN
            </button>
            <p className={logincss.noAccount}>Don't have an account?{" "}<Link to="/signup" className={logincss.signupLink}>Sign up</Link></p>
        </form>
        {/* </div> */}
        
        </div>
    </div>
    )
}

export default Login