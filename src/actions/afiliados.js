import { useDispatch } from "react-redux"
import { types } from "../types/types"



export const afiliadoStartnew=(id,name)=>{
    return async (dispatch)=>{
        console.log(id,name)
    }
} 


// const afiliadoAddNew = (afliciado)=>({
//     type: types.afiliadoAddNew,
//     payload: afliciado
// })