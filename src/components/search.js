import React, { useState } from "react";
import Navbar from "./navbar";
import magnifyingGlass from "../images/magnifying-glass-icon-13.png";
import patientFiles from "../components/patientFiles";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  /** const patientsData = [
    { name: "John Doe"},
    { name: "John Smith"},
    { name: "Joe Somebody"},
  ]; **/

  const patientList = Array.from(patientFiles);
  const [patients, setPatients] = useState(patientList);

  const handleNavigation = (patientId) => (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    navigate(`/show-patient-file/${patientId}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    const filteredPatients = patientList.filter((patient) =>
      patient.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setPatients(filteredPatients);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-36">
        <input
          className="text-[30px] text-center"
          type="search"
          placeholder="Search patients"
          onChange={handleChange}
          value={searchInput}
        />

        <table className="mt-4">
          <thead>
            <tr>
              <th>Patients</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>
                  <a
                    className="flex items-center gap-1"
                    href={"/show-patient-file/" + patient.id}
                    onClick={handleNavigation(patient.id)}
                  >
                    <img
                      alt=": View File"
                      src={magnifyingGlass}
                      className="object-scale-down h-6 w-6"
                    />
                    {patient.name}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
