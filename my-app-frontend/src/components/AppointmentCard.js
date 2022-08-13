import React from "react";
import { Card, Button } from 'react-bootstrap'

function AppointmentCard({ appointment, onDelete }) {
debugger
    function handleDeleteClick(e) {
         
        fetch(`http://localhost:9292/appointments/${appointment.id}`, {
            method: "DELETE",
        });

        onDelete(appointment.id);
    }
    return (
        <>
            <ul style={{
                display: "flex",
                fontSize: "smaller",
                justifyContent: "space-evenly",
                flexDirection: "column",
                color: "darkblue",
                marginTop: "2rem",
                marginRight: "1rem",
                marginLeft: "1rem"
            }}>
                <Card>
                    <Card.Header>Customer name: {appointment.customer_name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Service: {appointment.service}</Card.Title><br />
                        <Card.Title>Time: {appointment.date_time}</Card.Title><br />
                        <Card.Text>Specialist: {appointment.specialist_name}</Card.Text><br />
                        <Button onClick={handleDeleteClick} style={{ background: "honeydew" }}>🗑</Button>
                        {/* <Button style={{ background: "honeydew" }}>✏️</Button> */}
                    </Card.Body>
                </Card>
            </ul>
        </>
    )
}
export default AppointmentCard