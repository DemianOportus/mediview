import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <div className="flex justify-between mx-12 my-2 items-center">
                <h1 className="text-[40px] font-bold">MediView</h1>
                <div>
                    <Link to="/add-a-patient" className="mr-12">
                        <button 
                            className="bg-[#3D6189] w-[200px] text-white py-[6px] mt-6 mb-5">
                            Add a patient +
                        </button>
                    </Link>
                    <a href="/login"><i class="fa-solid fa-user fa-2xl"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;