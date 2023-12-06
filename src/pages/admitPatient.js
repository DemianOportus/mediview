import { Link } from "react-router-dom";

function AdmitPatient() {
    return(
        <div className="mt-20">
            <h1 className="font-bold text-[50px] text-center mb-8">Add a patient</h1>
            <form className="md:grid md:grid-cols-1 md:place-items-center xl:mx-36">
                <div className="order-1">
                    <label>Room number</label><br/>
                    <input type="name"/>
                </div>
                <div className="order-3">
                    <label>Bed number</label><br/>
                    <input type="address"/>
                </div>
            </form>
            <Link to="/search">
                <div className="text-center">
                <button 
                    className="bg-[#3D6189] w-[200px] text-white py-[6px] mt-6 mb-5">
                    Admit Patient
                </button>
                </div>
            </Link>
        </div>
    )
}

export default AdmitPatient;