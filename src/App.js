import React from "react";
import CounterApp from "./Components/CounterApp";
import SongList from "./Components/SongList";

import Display from "./Components/SongDisplay";

const App=()=>{

  return(
<div>
  <CounterApp></CounterApp>
  <div style={{display:"flex"}}>
  <SongList></SongList>
<Display/>
  </div>
</div>
  )
}

export default App;