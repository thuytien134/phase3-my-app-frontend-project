import React from "react";
import AppointmentCard from "./AppointmentCard";
import Search from "./Search";

function AppointmentList({ appointments, onDelete, search, onSearchChange ,handleClick}) {

   
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Enter your name to see your schedule</h1>
            <Search search={search} onSearchChange={onSearchChange}  handleClick={handleClick}/>
             <ul >
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