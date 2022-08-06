import React from "react";

function Services({ services }) {
  
    return (
        <>
            <ul>
                {services.map(service => (
                    <div key={service.id}>
                        <h2> {service.service} :
                            <span> {service.name}</span>
                        </h2>
                    </div>
                ))}
            </ul>
        </>
    )

}

export default Services