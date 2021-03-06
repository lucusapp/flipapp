
import Swal from "sweetalert2";
import { fetchConTocken, fetchSinTocken } from "../helpers/fetch"
import { types } from "../types/types";


export const starLogin=(email,password)=>{
    return async(dispatch)=>{
        console.log(email,password)
        const resp = await fetchSinTocken('auth', {email,password},'POST');
        console.log(resp)
        const body= await resp.json()
        console.log(body)

        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            })   )

        }else{
            Swal.fire ('Error', body.msg,'error')
        }

    }
}

export const startRegister= (email,password,name)=>{
    return async(dispatch)=>{
        const resp = await fetchSinTocken('auth/new', {email,password,name},'POST');
        console.log(resp)
        const body= await resp.json()
        console.log(body)

        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            })   )

        }else{
            Swal.fire ('Error', body.msg,'error')
        }

    }
}


export const startChecking =()=>{

        return async(dispatch)=>{
            const resp = await fetchConTocken('auth/renew');
            console.log(resp)
            const body= await resp.json()
            console.log(body)
    
            if (body.ok){
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());
    
                dispatch(login({
                    uid: body.uid,
                    name: body.name
                })   )
    
            }else{
                dispatch(checkingFinish())
            }
    
        }

    }
    
export const starLoginFacebook=(data)=>{

    return {
        type: types.authLogin,
        payload: data
    }
    }



const checkingFinish = ()=>({type: types.authCheckingFinish})


const login = (user)=>({
    type : types.authLogin,
    payload: user
});

//Logout

export const startLogout = () =>{
    return (dispatch)=>{
        localStorage.clear();
        dispatch(logout());
    }
}

const logout=()=>({type:types.authLogout})