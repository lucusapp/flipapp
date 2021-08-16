import { useDispatch } from "react-redux"
import { fetchAfiliadoFB } from "../helpers/fetch"
import { types } from "../types/types"



export const afiliadoStartnew=(id)=>{
    console.log(id)
    return async (dispatch)=>{
        const resp = await fetchAfiliadoFB(id,'POST');
        const body = await resp.json();
        console.log(body)
    }
} 


// const afiliadoAddNew = (afliciado)=>({
//     type: types.afiliadoAddNew,
//     payload: afliciado