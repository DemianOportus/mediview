import React, { useState } from 'react';
import Navbar from './navbar';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');

  const patientsData = [
    { name: "John Doe"},
    { name: "John Smith"},
    { name: "Joe Somebody"},

  ];

  const [patients, setPatients] = useState(patientsData);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    const filteredPatients = patientsData.filter((patient) =>
      patient.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setPatients(filteredPatients);
  };

  return (
    <div>
        <Navbar/>
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
            <tbody className='text-center'>
            {patients.map((patient, index) => (
                <tr key={index}>
                <td>{patient.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default Search;
