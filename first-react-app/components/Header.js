import React from "react";

var someStyle = {
    color: "green",
    backgroundColor: "yellow",
    borderTop: "5px solid green"
}

export default function Header (){
    return (
        <div className='bordered' style={someStyle}>
            Logo and Brand
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
    )
}