import React from "react";

const controlContext = React.createContext({
    selected: '',
    selected_no:0,
    change:()=>{},
    changeType:()=>{},
    clear:()=>{},
    hideElement:()=>{}
})

export default controlContext