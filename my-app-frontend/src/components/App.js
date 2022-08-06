import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import AppointmentList from "./AppointmentList";
import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
// import AppointmentList from "./AppointmentList";


function App() {

  const [services, setServices] = useState([]);
  const [appointments, setAppointment] = useState([]);
  // const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/services")
    .then((r) => r.json())
    .then((services) => setServices(services));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/appointments")
      .then((r) => r.json())
      .then((appointment) => setAppointment(appointment));
  }, []);

debugger

  return (
    <div className="App">
      <Header />
      <NavBar />
     
      <Routes>
        <Route path="appointments" 
        element={[
        <MakeAppointment services={services}/>,
        <AppointmentList appointments={appointments}/>]
      }
        >
          
        </Route>
        <Route path="/" element={<Services
          services={services}
        />}></Route>
      </Routes>

    </div>
  );
}

export default App;
