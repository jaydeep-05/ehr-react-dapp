import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import Navbar from './Pages/navbar';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';
import List from './Pages/list';
import EditDoctor from './Pages/edit_doctor';
import MakeAppointment from './Pages/make_appointment';
import EditAppointment from './Pages/edit_appointment';
import EditPatient from './Pages/edit_patient';
import AllowAccess from './Pages/approve_doctor';
import RevokeAccess from './Pages/revoke_doctor';
import RegisterPatient from './Pages/register_patient';
import RegisterDoctor from './Pages/register_doctor';
function App() {
  const {storageContract} =useContext(AppContext);
  console.log(storageContract);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/edit_doctor" element={<EditDoctor />}/>
        <Route path="/make_appointment" element={<MakeAppointment />}/>
        <Route path="/edit_appointment" element={<EditAppointment />}/>
        <Route path="/edit_patient" element={<EditPatient />}/>
        <Route path="/approve_doctor" element={<AllowAccess />}/>
        <Route path="/revoke_doctor" element={<RevokeAccess />}/>
        <Route path="/register_patient" element={<RegisterPatient />}/>
        <Route path="/register_doctor" element={<RegisterDoctor />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
