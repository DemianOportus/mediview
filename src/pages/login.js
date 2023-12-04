import welcomeImage from "../images/welcome.png";
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className="grid lg:grid-cols-2 lg:gap-20 xl:gap-40 items-center m-20 text-left">
            <img 
                alt="patient lying in hospital bed accompanied by two doctors" 
                src={welcomeImage}
                className="lg:w-full"
            />
            <div>
                <h1 className="text-[80px] font-bold">MediView</h1>
                <p className="text-[25px]">Accessible Medical Information</p>
                <form className="mt-8">
                    <label>Email</label><br/>
                    <input 
                        type="email"
                        className="mb-4"
                    />
                    <br/>
                    <label>Password</label><br/>
                    <input 
                        type="password"
                    />
                </form>
                <Link to="/search">
                    <button 
                        className="bg-[#3D6189] w-[390px] text-white py-[6px] mt-6 mb-5">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Login;