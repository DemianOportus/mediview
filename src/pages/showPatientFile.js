import React from "react";
import { useParams } from "react-router-dom";
import patientFiles from "../components/patientFiles";
import { Link } from "react-router-dom";

function ShowPatientFile() {
  const { id } = useParams();

  const patientFile = patientFiles.find((file) => file.id === parseInt(id));

  const isDischargeButtonVisible =
    patientFile && patientFile.dateOfDischarge === "";

  return (
    <div>
      {patientFile ? (
        <div className="m-12">
          <div className="flex justify-between items-center  mx-2">
            <h1 className="font-bold text-[25px]">
              {patientFile.name}'s Medical Information
            </h1>
            <button className="grid-row-end bg-[#3D6189] w-[100px] text-white py-[6px] mt-6 mb-5">
              <i className="fa-solid fa-pen-to-square fa-lg mr-3"></i>Edit
            </button>
          </div>
          <div className="lg:grid lg:grid-cols-2">
            <div className="bg-[#F5F5F5] m-2 p-4">
              <h2>General information</h2>
              <p>Name: {patientFile.name}</p>
              <p>Address: {patientFile.address}</p>
              <p>Phone number: {patientFile.phoneNumber}</p>
              <p>Date of birth: {patientFile.dateOfBirth}</p>
              <p>Gender: {patientFile.gender}</p>
              <p>Patient has a doctor: {patientFile.hasADoctorYesOrNo}</p>
              <p>Doctor's email: {patientFile.doctorEmail}</p>
              <p>Insurance number: {patientFile.insuranceNumber}</p>
            </div>
            <div className="bg-[#F5F5F5] m-2 p-4">
              <h2>Admission details</h2>
              <p>Date of admission: {patientFile.dateOfAdmission}</p>
              <p>Division: {patientFile.division}</p>
              <p>Room: {patientFile.room}</p>
              <p>Bed: {patientFile.bed}</p>
              <Link to={`/admit-patient/${patientFile.id}`}>
                <button className="grid-row-end bg-[#3D6189] w-[180px] text-white py-[6px] mt-6 mb-5">
                  Admit patient
                </button>
              </Link>
            </div>
            <div className="bg-[#F5F5F5] m-2 p-4">
              <h2>Discharge info</h2>
              <p>Date of discharge: {patientFile.dateOfDischarge}</p>
              <p>Duration of stay: {patientFile.durationOfStay}</p>
              <p>Medical condition: {patientFile.medicalCondition}</p>
              {isDischargeButtonVisible && (
                <Link to="/discharge">
                  <button className="bg-[#3D6189] w-[200px] text-white py-[6px] mt-6 mb-5">
                    Discharge Patient
                  </button>
                </Link>
              )}
            </div>
            <div className="bg-[#F5F5F5] m-2 p-4">
              <h2>Prescriptions</h2>
              {patientFile.medicationsPrescribed.length > 0 ? (
                patientFile.medicationsPrescribed.map((prescription, index) => (
                  <div className="mb-4" key={index}>
                    <p>Medication name: {prescription.medicationName}</p>
                    <p>
                      Medication identifier: {prescription.medicationIdentifier}
                    </p>
                    <p>
                      Method of administration:{" "}
                      {prescription.methodOfAdministration}
                    </p>
                    <p>Dosage: {prescription.dosage}</p>
                    <p>Frequency: {prescription.frequency}</p>
                    <p>
                      Number of administrations per day:{" "}
                      {prescription.numAdministrationsPerDay}
                    </p>
                    <p>Start date: {prescription.startDate}</p>
                    <p>End date: {prescription.endDate}</p>
                  </div>
                ))
              ) : (
                <p>No medications prescribed</p>
              )}
              <Link to={`/add-prescription/${patientFile.id}`}>
                <button className="grid-row-end bg-[#3D6189] w-[220px] text-white py-[6px] mt-6 mb-5">
                  Add prescription +
                </button>
              </Link>
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
