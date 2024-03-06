import React from "react";
import songsData from "../data/Songsdata";
import { UseDispatch, useDispatch } from "react-redux";
import clickedSong from "../redux/action/songAction";


const SongList=()=>{
let data=songsData;
// console.log(data);
let dispatch=useDispatch()
    return(
        <div>
{
    data.map((iteam)=>(
        <p key={iteam.id} onClick={()=>dispatch(clickedSong(iteam))}>{iteam.name}</p>
    ))
}
        </div>
    )
}


export default SongList;