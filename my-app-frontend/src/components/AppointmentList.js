import React from "react";
import AppointmentCard from "./AppointmentCard";
import Search from "./Search";
import { useState } from "react";
function AppointmentList({ appointments, onDelete, search, onSearchChange }) {
   const [isDisplay,setIsDisplay]=useState(false)
    debugger
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Enter your name to see your schedule</h1>
            <Search search={search} onSearchChange={onSearchChange} setIsDisplay={setIsDisplay} />
             <ul style={isDisplay? {display: "block"}: {display:"none"}}>
                {appointments.map(a => (
                    <AppointmentCard
                        key={a.id}
                        appointment={a}
                        onDelete={onDelete}
                    />
                ))}

            </ul>
        </>
    )
}
export default AppointmentList