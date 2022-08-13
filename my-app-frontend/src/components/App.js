import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import AppointmentList from "./AppointmentList";
import { Routes, Route } from "react-router-dom";
import CustomerSuport from "./CustomerSupport";
import Thankyou from "./Thankyou";

import { useState, useEffect } from "react";

function App() {

  const [services, setServices] = useState([]);
  const [appointments, setAppointment] = useState([]);
  const [search, setSearch] = useState("");
  // debugger
  useEffect(() => {
    fetch("http://localhost:9292/services")
      .then((r) => r.json())
      .then((services) => setServices(services));
  }, []);
function handleClick(){
    fetch(`http://localhost:9292/customers/${search}/appointments`)
      .then((r) => r.json())
      .then((appointment) => setAppointment(appointment));
}



  function handleDeleteAppointment(id) {
    const updatedAppointment = appointments.filter((a) => a.id !== id);
    setAppointment(updatedAppointment);
  }

  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="appointments"
          element={[
            <MakeAppointment services={services}  />,
            <AppointmentList appointments={appointments} onDelete={handleDeleteAppointment}
              search={search} onSearchChange={setSearch} handleClick={handleClick}/>]}>
        </Route>
        <Route path="/" element={<Services services={services} />}></Route>
        <Route path="customer-support" element={<CustomerSuport/>}></Route>
        <Route path="thank-you" element={<Thankyou/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
