import React from "react";
import { useParams } from "react-router-dom";
import patientFiles from "../components/patientFiles";

function ShowPatientFile() {
  const { id } = useParams(); 

  const patientFile = patientFiles.find((file) => file.id === parseInt(id));

  return (
    <div>
      {patientFile ? (
        <div className="m-12">
            <div className="flex justify-between items-center  mx-2">
                <h1 className="font-bold text-[25px]">{patientFile.name}'s Medical Information</h1>
                <button 
                    className="grid-row-end bg-[#3D6189] w-[100px] text-white py-[6px] mt-6 mb-5">
                    <i className="fa-solid fa-pen-to-square fa-lg mr-3"></i>Edit
                </button>
            </div>
            <div className="lg:grid lg:grid-cols-2">
            
                <div className="bg-[#F5F5F5] m-2 p-4">
                    <h2>Admission details</h2>
                    <p>Division: {patientFile.division}</p>
                    <p>Room: {patientFile.room}</p>
                    <p>Bed: {patientFile.bed}</p>
                </div>
                <div className="bg-[#F5F5F5] m-2 p-4">
                    <h2>Discharge info</h2>
                    <p>Duration of stay: {patientFile.durationOfStay}</p>
                    <p>Medical condition: {patientFile.medicalCondition}</p>
                    <p>Medications prescribed: {patientFile.medicationsPrescribed}</p>
                </div>
                <div className="bg-[#F5F5F5] m-2 p-4">
                    <h2>Prescriptions</h2>
                    <p>{patientFile.medicationsPrescribed}:</p>
                    <li>Method of administration: {patientFile.methodOfAdministration}</li>
                    <li>Dosage: {patientFile.dosage}</li>
                    <li>Frequency: {patientFile.frequency}</li>
                    <li>Start date: {patientFile.startDate}</li>
                    <li>End date: {patientFile.endDate}</li>
                    <button 
                        className="grid-row-end bg-[#3D6189] w-[220px] text-white py-[6px] mt-6 mb-5">
                        Add prescription +
                    </button>
                </div>
            </div>
        </div>
      ) : (
        <p>Patient not found</p>
      )}
    </div>
  );
}

export default ShowPatientFile;
