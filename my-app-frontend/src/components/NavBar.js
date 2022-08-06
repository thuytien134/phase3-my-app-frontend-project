import React from "react";
import { ReactDOM } from "react";
import {  NavLink } from "react-router-dom";
function NavBar() {
    return (
        <div>
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