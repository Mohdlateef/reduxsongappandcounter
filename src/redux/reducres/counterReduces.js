import { INCREASE,DECREASE,RESET } from "../action/actiontypes";

let intialState=0;


let counterReducres=(state=intialState,action)=>{

switch(action.type){
    case INCREASE:
        return state+1;
        case DECREASE:
            return state-1;
            case RESET:
                return 0;
                default:
                    return state;
}

}


export default counterReducres;