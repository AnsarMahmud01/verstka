import React from "react";




function Inputname(props) {
    return (
        <input className="input" type={props.type} placeholder={props.place} id={props.id} value={props.name}></input>
    )
}

export default Inputname