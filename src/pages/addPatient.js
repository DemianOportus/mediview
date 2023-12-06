import { Link } from "react-router-dom";

function AddPatient() {
    return(
        <div className="mt-20">
            <h1 className="font-bold text-[50px] text-center mb-8">Add a patient</h1>
            <form className="md:grid md:grid-cols-2 md:place-items-center xl:mx-36">
                <div className="order-1">
                    <label>Patient's name</label><br/>
                    <input type="name"/>
                </div>
                <div className="order-3">
                    <label>Patient's address</label><br/>
                    <input type="address"/>
                </div>
                <div className="order-5">
                    <label>Patient's phone number</label><br/>
                    <input type="tel"/>
                </div>
                <div className="order-7">
                    <label>Patient's date of birth</label><br/>
                    <input type="date"/>
                </div>
                <div className="order-2 w-[390px]">
                    <label>Patient's gender</label><br/>
                    <input className="w-10" type="radio" name="gender" id="male"/>
                    <label className="font-normal" for="male">Male</label>
                    <input className="w-10" type="radio" name="gender" id="female"/>
                    <label className="font-normal" for="female">Female</label>
                </div>
                <div className="order-4 w-[390px]">
                    <label>Patient has a doctor</label><br/>
                    <input className="w-10" type="radio" name="patientHasDoctorYesOrNo" id="patientHasDoctor"/>
                    <label className="font-normal" for="patientHasDoctor">Yes</label>
                    <input className="w-10" type="radio" name="patientHasDoctorYesOrNo" id="patientHasNoDoctor"/>
                    <label className="font-normal" for="patientHasNoDoctor">No</label>
                </div>
                <div className="order-6">
                    <label>Doctor's email</label><br/>
                    <input type="email"/>
                </div>
                <div className="order-8">
                    <label>Insurance number</label><br/>
                    <input type="number"/>
                </div>
                <div className="order-10">
                    <label>Medical Proxy</label><br/>
                    <input type="name"/>
                </div>
            </form>
            <Link to="/search">
                <div className="text-center">
                <button 
                    className="bg-[#3D6189] w-[200px] text-white py-[6px] mt-6 mb-5">
                    Add patient
                </button>
                </div>
            </Link>
        </div>
    )
}

export default AddPatient;