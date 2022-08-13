# Welcome to my Nail Salon project
## Introduction: 
On this page you can see the different services our salon offers, make appointment with your specialist, see all your current appointments, and cancel any appointment.  
## Page structure
This page has two tabs:
1. On the `Services` tab you can see all the services we offer and the specialist who has the most appointments. This component uses two GET requests to get all the services and the specialist who has the most appointments. It uses two APIs: http://localhost:9292/services, http://localhost:9292/specialist_has_most_appointments
2. On the `Appointment` tab you can make an appointment, see your current appointments, and cancel the. This `Appointment` component uses a CRUD request with API http://localhost:9292/appointments.
3. I used React-Bootstrap and Inline Styling to create a look and feel for my page.

