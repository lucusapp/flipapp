
import Swal from "sweetalert2";
import { fetchSinTocken } from "../helpers/fetch"
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


const login = (user)=>({
    type : types.authLogin,
    payload: user
})