import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { starLogin, starLoginFacebook } from '../../actions/auth';
import FacebookLogin from 'react-facebook-login';

export const LoginScreen = () => {

const dispatch = useDispatch()
const responseFacebook = (res)=>{
   const data = {
       email: res.email,
       name: res.name,
       uid: res.userID,
       accessToken: res.accessToken
       
   }
   console.log(data)

   if (data.email){
   dispatch( starLoginFacebook(data))
   }else{
    dispatch({
        type: 'USER_LOGIN_FAIL',
        payload: 'Cannot access to your Facebook email !',
      });
   }
    console.log(res)
}



const [formLoginValues, handleLoginInputChange]= useForm({
    lEmail: 'gavia@hotmail.com',
    lPassword: '123456'
})



const {lEmail,lPassword}= formLoginValues;

const handleLogin= (e)=>{
    e.preventDefault()
   // console.log(formLoginValues)
    dispatch (starLogin(lEmail,lPassword))
}

    return (
        <>
     <div className="auth__main">
         <div className="auth__box-container">
            <h3 className="auth__title">Login</h3>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="email"

                        className ='auth__input'
                        autoComplete="off"
                        name= 'lEmail'
                        value={lEmail}
                        onChange={handleLoginInputChange}

                    />
                    <input
                        type="password"
                        placeholder="password"
                        className ='auth__input'
                        name= 'lPassword'
                        value={lPassword}
                        onChange={handleLoginInputChange}
                    />

                    <button 
                        type="submit"
                        className="btn btn-primary btn-block"
                        

                    >
                        Login
                    </button>
                    <hr/>
                    <div className="auth__social-networks">
                        <p>
                            Login con redes sociales
                        </p>
                        <div className="google-btn"
>
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                            <FacebookLogin
                            appId="792985757511365"
                            autoLoad={false}
                            //scope="public_profile,email,pages_show_list,user_managed_groups,pages_manage_metadata"
                            fields="name,email,picture"
                            // onClick={componentClicked}
                            callback={responseFacebook} />,
                        </div>
                    </div>
                    <Link to="/auth/register"
                    >
                        Create nueva cuenta
                    </Link>

                </form>
            </div>
        </div>
       </>
    )
}
