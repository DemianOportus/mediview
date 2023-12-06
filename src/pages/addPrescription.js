import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import patientFiles from "../components/patientFiles";
import { useNavigate } from 'react-router-dom';

function AddPrescription() {
    const { id } = useParams();
    const patientFile = patientFiles.find(file => file.id === parseInt(id));
    const navigate = useNavigate();

    // States for form inputs
    const [medicationName, setMedicationName] = useState('');
    const [methodOfAdministration, setMethodOfAdministration] = useState('');
    const [dosage, setDosage] = useState('');
    const [frequency, setFrequency] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Find the patient file
        const patientIndex = patientFiles.findIndex(file => file.id === parseInt(id));
        if (patientIndex === -1) {
          // Handle error: Patient not found
          return;
        }
      
        // Update the patient file with new prescription
        const updatedPrescription = {
          medicationName,
          methodOfAdministration,
          dosage,
          frequency,
          startDate,
          endDate
        };
      
        patientFiles[patientIndex].medicationsPrescribed.push(updatedPrescription);
      
        // Redirect to the patient's file page
        navigate(`/show-patient-file/${id}`);
      };
      

    return(
        <div className="mt-20">
            <h1 className="font-bold text-[50px] text-center mb-8">Add prescription for {patientFile.name}</h1> 
            <form 
                onSubmit={handleSubmit} 
                className="xl:mx-36"
            >
                <div className="md:grid md:grid-cols-2 md:place-items-center ">
                    <div className="order-1">
                        <label>Medication name</label><br/>
                        <input type="text" value={medicationName} onChange={(e) => setMedicationName(e.target.value)} />
                    </div>
                    <div className="order-3">
                        <label>Method of administration</label><br/>
                        <input type="text" value={methodOfAdministration} onChange={(e) => setMethodOfAdministration(e.target.value)} />
                    </div>
                    <div className="order-5">
                        <label>Dosage</label><br/>
                        <input type="text" value={dosage} onChange={(e) => setDosage(e.target.value)} />
                    </div>
                    <div className="order-2">
                        <label>Frequency</label><br/>
                        <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
                    </div>
                    <div className="order-4">
                        <label>Start date</label><br/>
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="order-8">
                        <label>End date</label><br/>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                </div>
                <div className="text-center">
                    <button 
                        type="submit"
                        className="grid-row-end bg-[#3D6189] w-[220px] text-white py-[6px] mt-6 mb-5"
                    >
                        Add prescription +
                    </button>
                </div>
            </form>
            <div className="text-center">
            </div>
        </div>
    )
}

export default AddPrescription;