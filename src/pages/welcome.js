import welcomeImage from "../images/welcome.png";
import { Link } from 'react-router-dom';

function Welcome() {
    return(
        <div className="grid lg:grid-cols-2 gap-5 items-center m-20 text-center">
            <img 
                alt="patient lying in hospital bed accompanied by two doctors" 
                src={welcomeImage}
                className="lg:w-full"
            />
            <div>
                <h1 className="text-[80px] font-bold">MediView</h1>
                <p className="text-[25px]">Accessible Medical Information</p>
                <Link to="/login">
                    <button 
                        className="bg-[#3D6189] w-[390px] text-white py-[6px] mt-12 mb-5">
                        Login
                    </button>
                </Link>
                <br/>
                <p className="text-[20px]">Don't have an account? <a href="/signup" className="underline hover:no-underline">Sign up</a></p>
            </div>
        </div>
    )
}

export default Welcome;