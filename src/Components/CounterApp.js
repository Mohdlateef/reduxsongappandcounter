import React from "react";
import { UseDispatch,useDispatch,useSelector } from "react-redux";

import { increase,decrease,reset } from "../redux/action/counterAction";



let CounterApp=()=>{
let count=useSelector((state)=>state.count);
let dispatch=useDispatch()
return(
    <div>
<button onClick={}>  Increase</button>
<button>DECREASE</button>
<button>Reset</button>

    </div>
)



}

export default CounterApp;