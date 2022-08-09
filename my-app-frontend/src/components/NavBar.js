import React from "react";
import { ReactDOM } from "react";
import {  NavLink } from "react-router-dom";
function NavBar() {
    return (
        <div style={{display:"flex",justifyContent:"space-around",fontFamily:"revert",fontSize:"larger", background:"aquamarine"}}>
            <NavLink to="/">
                Services 💅💅💅 ||
            </NavLink>
            <NavLink to="/appointments">
                Appointments 📆📆📆 ||
            </NavLink>
            <NavLink to="customer-support">
                Customer Support ☎️☎️☎️
            </NavLink>
    
        </div>
    )
}

export default NavBar