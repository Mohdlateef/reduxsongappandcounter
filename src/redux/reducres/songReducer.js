import { CLICKEDSONG } from "../action/actiontypes";

let intialState=null;

const songReducres=(state=intialState,action)=>{

    if(action.type==CLICKEDSONG){
        return(
           state= action.payload
        )
    }
    else{
        return state;
    }

}
export default songReducres;

