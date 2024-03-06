import React from "react";
import { UseDispatch,useDispatch,useSelector } from "react-redux";

import { increase,decrease,reset } from "../redux/action/counterAction";



let CounterApp=()=>{
let count=useSelector((state)=>state.counter);
// console.log(count);
let dispatch=useDispatch()
return(
    <div>
        <h4>count is   {count}</h4>
<button onClick={()=>dispatch(increase())}>  Increase</button>
<button onClick={()=>dispatch(decrease())}>DECREASE</button>
<button onClick={()=>dispatch(reset())}>Reset</button>

    </div>
)



}

export default CounterApp;