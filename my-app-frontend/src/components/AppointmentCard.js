import React from "react";
function AppointmentCard({ appointments }) {
    return (
        <>
            <ul>
                {appointments.map(appointment => (
                    <div key={appointment.id}>
                        <h3>{appointment.date_time}</h3>
                        <h3>{appointment.service}</h3>
                        
                        {/* <title>{appointment.service}</title>
                        <title>{appointment.specialist}</title> */}
                        <button><span>❎</span></button>

                    </div>
                ))}
            </ul>
        </>
    )
}
export default AppointmentCard