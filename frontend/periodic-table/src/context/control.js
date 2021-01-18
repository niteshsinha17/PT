
import React from "react";


const controlContext = React.createContext({
    selected: '',
    selected_no:0,
    change:()=>{},
    changeState:()=>{},
    clear:()=>{}
})

export default controlContext