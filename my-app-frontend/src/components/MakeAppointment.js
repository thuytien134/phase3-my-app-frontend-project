import React from "react";

function MakeAppointment({services}) {
    // debugger
    return (
        <>
            <div>
                <form className="make-appointment">
                    <h3>Make appointment</h3>
                    <label>Name:
                        <input type="text" placeholder="name" /><br />
                    </label>
                    <label>
                        Time:
                        <input type="text" placeholder="time" /><br />
                    </label>
                    <label>
                        Service:
                        <select>
                            {services.map(service => (
                                <option key={service.id} value={service.service}>{service.service}</option>
                            ))}
                        </select><br />
                    </label>
                    <label>
                        Specialist:
                        <select>
                            {services.map(service => (
                                <option key={service.id} value={service.name}>{service.name}</option>
                            ))}
                        </select><br />
                    </label>
                    <button>Submit</button>
                </form>

            </div>
        </>
    )
}
export default MakeAppointment