import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientFiles from "../components/patientFiles";

function AdmitPatient() {
  const [availableRooms, setAvailableRooms] = useState([
    { division: "A", rooms: ["1", "2", "3"] },
    { division: "B", rooms: ["1", "2", "3"] },
    { division: "C", rooms: ["1", "2", "3"] },
  ]);
  const navigate = useNavigate();

  const handleAdmitClick = () => {
    // Perform actions like admitting the patient and then navigate
    // For example:
    // const patientId = admitPatient();
    // navigate(`/show-patient-file/${patientId}`);

    // If you're just navigating without needing to pass dynamic data:
    navigate("/search");
  };

  const getOccupiedBeds = () => {
    const occupiedBeds = {};
    patientFiles.forEach((patient) => {
      if (patient.dateOfDischarge === "") {
        const key = `${patient.division}-${patient.room}-${patient.bed}`;
        occupiedBeds[key] = true;
      }
    });
    return occupiedBeds;
  };

  const occupiedBeds = getOccupiedBeds();

  return (
    <div className="mt-20 text-center">
      <h1 className="font-bold text-[50px] text-center mb-8">
        Admit a patient
      </h1>
      <form>
        <div>
          <label>Division</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label>Room number</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label>Bed number</label>
          <br />
          <input type="text" />
        </div>
      </form>
      <h2 className="text-center mt-5">Available rooms and beds</h2>
      <p className="mb-5 text-[15px]">
        *Available beds are black. Unavailable beds are red.*
      </p>
      <table className="m-auto">
        <thead>
          <tr>
            <th>Division</th>
            <th>Room</th>
            <th>Beds</th>
          </tr>
        </thead>
        <tbody>
          {availableRooms.map((divisionRooms) => (
            <React.Fragment key={divisionRooms.division}>
              {divisionRooms.rooms.map((room) => (
                <tr key={room}>
                  <td>{divisionRooms.division}</td>
                  <td>{room}</td>
                  <td>
                    {[1, 2, 3].map((bed) => {
                      const bedKey = `${divisionRooms.division}-${room}-${bed}`;
                      const isOccupied = occupiedBeds[bedKey];

                      return (
                        <span
                          key={bed}
                          style={{
                            color: isOccupied ? "red" : "black",
                            marginRight: "5px",
                          }}
                        >
                          Bed {bed}{" "}
                        </span>
                      );
                    })}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="text-center">
        <button
          className="bg-[#3D6189] w-[200px] text-white py-[6px] mt-6 mb-5"
          onClick={handleAdmitClick}
        >
          Admit Patient
        </button>
      </div>
    </div>
  );
}

export default AdmitPatient;
