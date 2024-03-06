import React from "react";
import { UseSelector, useSelector } from "react-redux";

const Display=()=>{

let data=useSelector((state=>state.song))
console.log(data);
    return(
        <div>
{data&&(<div>name:{data.name}
<br></br>
artist:{data.artist}
</div>)}
        </div>
    )
}


export default Display;
