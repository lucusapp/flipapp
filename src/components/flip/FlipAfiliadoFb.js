import React from 'react'
import { useDispatch } from 'react-redux'
import { afiliadoStartnew } from '../../actions/afiliados'
import {useForm} from '../../hooks/useForm'

export const FlipAfiliadoFb = () => {

const dispatch = useDispatch()

    const [formAfiliadoValues,handleInputChange]= useForm ({
        id: "1771497336441517",
        name: "Lucus App",

    })

    const {id,name}= formAfiliadoValues;

    const handleAfiliado = (e)=>{
        e.preventDefault();
       dispatch(afiliadoStartnew(id,name));
    }
  
    return (
        <>
        <div className="auth__main">
            <div className="auth__box-container">
               <h3 className="auth__title">Login</h3>
                   <form onSubmit={handleAfiliado}>
                       <input
                           type="text"
                           placeholder="email"
   
                           className ='auth__input'
                           autoComplete="off"
                           name= 'id'
                           value={id}
                           onChange={handleInputChange}
   
                       />
                       <input
                           type="text"
                           placeholder="text"
                           className ='auth__input'
                           name= 'name'
                           value={name}
                           onChange={handleInputChange}
                       />
   
                       <button 
                           type="submit"
                           className="btn btn-primary btn-block"
                           
   
                       >
                           Login
                       </button>
                    </form>
            </div>
        </div>
        </>
    )
}
