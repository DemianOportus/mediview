import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Search from "./components/search";
import AddPatient from "./pages/addPatient";
import ShowPatientFile from "./pages/showPatientFile";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="search" element={<Search />} />
        <Route path="add-a-patient" element={<AddPatient />} />
        <Route path="show-patient-file/:id" element={
          <div>
            <Navbar/>
            <ShowPatientFile />
          </div>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
