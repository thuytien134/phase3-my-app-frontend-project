import React from "react";
import AppointmentCard from "./AppointmentCard";
import Search from "./Search";
function AppointmentList({appointments}){
    // debugger
    return(
        <>
        <h1>Enter your name to see your schedule</h1>
        <Search/>
        <AppointmentCard appointments={appointments}/>
        </>
    )
}
export default AppointmentList