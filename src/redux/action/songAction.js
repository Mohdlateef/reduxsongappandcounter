import { CLICKEDSONG } from "./actiontypes";





const clickedSong=(value)=>{
    return{
        type:CLICKEDSONG,
        payload:value,
    }
}
export default clickedSong