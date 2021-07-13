import { useDispatch } from "react-redux"
import { types } from "../types/types"




export const afiliadoStartnew=(afiliado)=>{
    return async (dispatch)=>{
        console.log(afiliado)
    }
} 


const afiliadoAddNew = (afliciado)=>({
    type: types.afiliadoAddNew,
    payload: afliciado
})