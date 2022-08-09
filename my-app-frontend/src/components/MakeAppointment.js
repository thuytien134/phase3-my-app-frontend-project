import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function MakeAppointment({ services, onAddAppointment }) {
    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [myService, setService] = useState("")
    const mySpecialist = Object.assign({}, ...services.filter(service => service.service === myService)).name

    function handleSubmit(e) {
        e.preventDefault();
        const obj = {
            time: time,
            service: myService,
            specialist_name: mySpecialist,
            customer_name: name
        }
        fetch("http://localhost:9292/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })

            .then((r) => r.json())
            .then((obj) => {
                onAddAppointment(obj);

            });
    }

    return (
        <>
            <h3 style={{textAlign:"center"}}>Make appointment</h3>
            <div>
                <Form className="make-appointment" onSubmit={handleSubmit}
                    style={{ display: "flex", justifyContent: "space-evenly", alignItems: "stretch" }}>
                    <Form.Label>Customer Name:
                        <Form.Control type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} /><br />
                    </Form.Label>
                    <Form.Label>
                        Time:
                        <Form.Control type="text" placeholder="time" value={time} onChange={e => setTime(e.target.value)} /><br />
                    </Form.Label>
                    <Form.Label>
                        Service:
                        <Form.Select onChange={e => setService(e.target.value)}>
                            {services.map(service => (
                                <option key={service.id} value={service.service}>{service.service}</option>
                            ))}
                        </Form.Select><br />
                    </Form.Label>
                    <Form.Label>
                        Specialist:
                        {/* <select onChange={e => setSpecialistName(e.target.value)}>
                            {services.map(service => (
                                <option key={service.id} value={specialistName}>{service.name}</option>
                            ))}
                        </select><br /> */}
                        <Form.Control type="text" value={mySpecialist} disabled readOnly/>
                    </Form.Label>
                    <button  style={{background:"cadetblue",height:"50px",alignSelf:"center"}} >Submit</button>
                </Form>

            </div>
        </>
    )
}
export default MakeAppointment