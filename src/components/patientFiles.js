const patientFiles = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Street",
    phoneNumber: "(123)456-7890",
    dateOfBirth: "2000-12-01",
    gender: "male",
    hasADoctorYesOrNo: "yes",
    doctorEmail: "janedoe@doctor.com",
    insuranceNumber: "12345",
    medicalProxy: "Mary Doe",
    dateOfAdmission: "2023/08/01",
    division: "A",
    room: "1",
    bed: "3",
    dateOfDischarge: "",
    durationOfStay: "",
    medicalCondition: "",
    medicationsPrescribed: [
      {
        medicationName: "insulin",
        medicationIdentifier: "INS123", // New field
        methodOfAdministration: "intravenous",
        dosage: "20mg",
        frequency: "6 hours",
        numAdministrationsPerDay: 4, // New field
        startDate: "2023-01-01",
        endDate: "2023-01-12",
      },
    ],
  },
  {
    id: 2,
    name: "John Smith",
    address: "456 Avenue",
    phoneNumber: "(987)654-3210",
    dateOfBirth: "1998-10-01",
    gender: "male",
    hasADoctorYesOrNo: "yes",
    doctorEmail: "joesomebody@doctor.com",
    insuranceNumber: "67890",
    medicalProxy: "Mary Smith",
    dateOfAdmission: "2023/10/01",
    division: "B",
    room: "3",
    bed: "2",
    durationOfStay: "36 hours",
    medicalCondition: "heart attack",
    dateOfDischarge: "2023/10/01",
    medicationsPrescribed: [
      {
        medicationName: "aspirin",
        medicationIdentifier: "ASP456", // New field
        methodOfAdministration: "oral",
        dosage: "50mg",
        frequency: "12 hours",
        numAdministrationsPerDay: 2, // New field
        startDate: "2023-10-01",
        endDate: "2023-10-15",
      },
    ],
  },
];

export default patientFiles;
