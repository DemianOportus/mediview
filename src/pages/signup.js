import { Link } from "react-router-dom";

function Signup() {
    return(
        <div className="mt-20">
            <h1 className="font-bold text-[50px] text-center mb-8">Sign up</h1>
            <form className="md:grid md:grid-cols-2 md:place-items-center xl:mx-36">
                <div className="order-1">
                    <label>First name</label><br/>
                    <input type="name"/>
                </div>
                <div className="order-3">
                    <label>Last name</label><br/>
                    <input type="name"/>
                </div>
                <div className="order-5">
                    <label>Address</label><br/>
                    <input type="address"/>
                </div>
                <div className="order-7">
                    <label>Phone number</label><br/>
                    <input type="tel"/>
                </div>
                <div className="order-9">
                    <label>Date of birth</label><br/>
                    <input type="date"/>
                </div>
                <div className="order-2 w-[390px]">
                    <label>Gender</label><br/>
                    <input className="w-10" type="radio" name="gender" id="male"/>
                    <label className="font-normal" for="male">Male</label>
                    <input className="w-10" type="radio" name="gender" id="female"/>
                    <label className="font-normal" for="female">Female</label>
                </div>
                <div className="order-4 w-[390px]">
                    <label>Medical profession</label><br/>
                    <input className="w-10" type="radio" name="medicalProfession" id="nurse"/>
                    <label className="font-normal" for="nurse">Nurse</label>
                    <input className="w-10" type="radio" name="medicalProfession" id="doctor"/>
                    <label className="font-normal" for="doctor">doctors</label>
                </div>
                <div className="order-6">
                    <label>Email</label><br/>
                    <input type="email"/>
                </div>
                <div className="order-8">
                    <label>Password</label><br/>
                    <input type="password"/>
                </div>
                <div className="order-10">
                    <label>Confirm password</label><br/>
                    <input type="password"/>
                </div>
            </form>
            <Link to="/search">
                <div className="text-center">
                <button 
                    className="bg-[#3D6189] w-[250px] text-white py-[6px] mt-6 mb-5">
                    Create account
                </button>
                </div>
            </Link>
        </div>
    )
}

export default Signup;