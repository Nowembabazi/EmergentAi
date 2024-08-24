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
import Faculty from './Pages/Dashboards/Faculty';
import GenerateDateReport from './Pages/Faculty/GenerateDateReport';
import GenerateReport from './Pages/Faculty/GenerateReport';
import PatientBio from './Pages/Faculty/PatientBio';
import Lab from './Pages/Dashboards/Lab';
import PatientTable from './Pages/Faculty/PatientTable';
import ProfileSettings from './Pages/Settings/ProfileSettings';
import NotificationSettings from './Pages/Settings/NotificationSettings';
import LanguageSettings from './Pages/Settings/LanguageSettings';
import NewTests from './Pages/Lab/NewTests';
import ViewTests from './Pages/Lab/ViewTests';
import CompletedTests from './Pages/Lab/CompletedTests';

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
      <Route path="/lab" element={<Lab />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/new-tests" element={<NewTests />} />
      <Route path="/view-tests" element={<ViewTests />} />
      <Route path="/completed-tests" element={<CompletedTests />} />
      <Route path="/patient-bio" element={<PatientBio />} />
      <Route path="/patient-table" element={<PatientTable />} />
      <Route path="/generate-date" element={<GenerateDateReport />} />
      <Route path="/generate-report" element={<GenerateReport />} />
      <Route path="/patient-form" element={<PatientForm />} />
      <Route path="/profile-settings" element={<ProfileSettings />} />
      <Route path="/notification-settings" element={<NotificationSettings />} />
      <Route path="/language-settings" element={<LanguageSettings />} />
      </Routes>
    </BrowserRouter>
    // <ViewPatient/>

  );
}

export default App;
