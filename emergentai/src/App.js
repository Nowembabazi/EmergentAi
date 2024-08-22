import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Doctor from './Pages/Dashboards/Doctor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patient from './Pages/Dashboards/Patient';
import Medical from './Pages/Patients/Medical';
import Test from './Pages/Patients/Test';
import Home from './Pages/Home';
import PatientForm from './Pages/Patients/PatientsForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/test" element={<Test />} />
      <Route path="/medical" element={<Medical />} />
      <Route path="/patient-form" element={<PatientForm />} />
      </Routes>
    </BrowserRouter>
    // <ViewPatient/>

  );
}

export default App;
