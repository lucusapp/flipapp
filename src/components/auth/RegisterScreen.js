import React from 'react'
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';
import {useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [formRegisterValues, handleRegisterInputChange]= useForm({
        rName:'Josua',
        rEmail: 'gavia@hotmail.com',
        rPassword: '123456',
        rPassword2: '123456'
    })

        const {rName,rEmail,rPassword,rPassword2} = formRegisterValues;

        const handleRegister= (e)=>{
            e.preventDefault()

            if(rPassword!==rPassword2){
                return Swal.fire('Error', 'Las contraseñas debe de ser iguales')
            }
           console.log(formRegisterValues)
           dispatch (startRegister(rEmail,rPassword,rName))
        }


    return (
        <>
        <h3 className="auth__title">Login</h3>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="email"

                    className ='auth__input'
                    autoComplete="off"
                    name= 'rName'
                    value={rName}
                    onChange={handleRegisterInputChange}

                />
                <input
                    type="text"
                    placeholder="email"
                    className ='auth__input'
                    name= 'rEmail'
                    value={rEmail}
                    onChange={handleRegisterInputChange}
                />
                <input
                    type="password"
                    placeholder="Repetir Password"
                    className ='auth__input'
                    name= 'rPassword'
                    value={rPassword}
                    onChange={handleRegisterInputChange}
                />
                <input
                    type="password"
                    placeholder="password2"
                    className ='auth__input'
                    name= 'rPassword2'
                    value={rPassword2}
                    onChange={handleRegisterInputChange}
                />
                <button 
                        type="submit"
                        className="btn btn-primary btn-block"
                        

                    >
                        Registro
                    </button>
            </form>
        </>
    )
}
