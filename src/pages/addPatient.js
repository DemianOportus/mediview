import { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientFiles from "../components/patientFiles";

function AddPatient() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    hasADoctorYesOrNo: "",
    doctorEmail: "",
    insuranceNumber: "",
    medicalProxy: "",
    dateOfAdmission: "",
    division: "",
    room: "",
    bed: "",
    dateOfDischarge: "",
    durationOfStay: "",
    medicalCondition: "",
    medicationsPrescribed: [],
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  const handleDoctorChange = (e) => {
    setFormData({
      ...formData,
      hasADoctorYesOrNo: e.target.value,
    });
  };

  const addPatientToFile = () => {
    const newPatientId = patientFiles.length + 1; // Generate ID based on the length of patientFiles array
    const newPatient = {
      id: newPatientId,
      ...formData,
    };

    patientFiles.push(newPatient);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    addPatientToFile();

    // Navigate to the newly added patient's file
    navigate(`/show-patient-file/${patientFiles.length}`);
  };

  return (
    <div className="mt-20">
      <h1 className="font-bold text-[50px] text-center mb-8">Add a patient</h1>
      <form className="xl:mx-36" onSubmit={handleSubmit}>
        <div className="md:grid md:grid-cols-2 md:place-items-center ">
          <div className="order-1">
            <label>Patient's name</label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="order-3">
            <label>Patient's address</label>
            <br />
            <input
              type="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="order-5">
            <label>Patient's phone number</label>
            <br />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="order-7">
            <label>Patient's date of birth</label>
            <br />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="order-2 w-[390px]">
            <label>Patient's gender</label>
            <br />
            <input
              className="w-10"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleGenderChange}
            />
            <label className="font-normal" for="male">
              Male
            </label>
            <input
              className="w-10"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleGenderChange}
            />
            <label className="font-normal" for="female">
              Female
            </label>
          </div>
          <div className="order-4 w-[390px]">
            <label>Patient has a doctor</label>
            <br />
            <input
              className="w-10"
              type="radio"
              name="hasADoctorYesOrNo"
              id="patientHasDoctor"
              value="yes"
              checked={formData.hasADoctorYesOrNo === "yes"}
              onChange={handleDoctorChange}
            />
            <label className="font-normal" for="patientHasDoctor">
              Yes
            </label>
            <input
              className="w-10"
              type="radio"
              name="hasADoctorYesOrNo"
              id="patientHasNoDoctor"
              value="no"
              checked={formData.hasADoctorYesOrNo === "no"}
              onChange={handleDoctorChange}
            />
            <label className="font-normal" for="patientHasNoDoctor">
              No
            </label>
          </div>
          <div className="order-6">
            <label>Doctor's email</label>
            <br />
            <input
              type="email"
              name="doctorEmail"
              value={formData.doctorEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="order-8">
            <label>Insurance number</label>
            <br />
            <input
              type="number"
              name="insuranceNumber"
              value={formData.insuranceNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="order-10">
            <label>Medical Proxy</label>
            <br />
            <input
              type="name"
              name="medicalProxy"
              value={formData.medicalProxy}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className=" text-center">
          <button
            className="bg-[#3D6189] w-[200px] text-white py-[6px] mt-6 mb-5"
            type="submit"
          >
            Add patient
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
