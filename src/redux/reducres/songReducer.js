import { CLICKEDSONG, RESET } from "../action/actiontypes";

let intialState=null;

const songReducres=(state=intialState,action)=>{

    if(action.type==CLICKEDSONG){
        return(
           state= action.payload
        )
    }
   else if(action.type==RESET){
        return(
            state=null
        )
    }
    else{
        return state;
    }

}
export default songReducres;

