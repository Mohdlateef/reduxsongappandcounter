import { INCREASE,DECREASE,RESET } from "./actiontypes";

export const increase=()=>{
    return{
        type:INCREASE,
    }
}



export const decrease=()=>{
    return{
        type:DECREASE,
    }
}

export const reset=()=>{
    return{
        type:RESET,
    }
}