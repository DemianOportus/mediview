import { Link } from "react-router-dom";

function Discharge() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-[50px] text-center mb-8">
        Discharge patient
      </h1>
      <form className="md:grid md:grid-cols-2 md:place-items-center xl:mx-36">
        <div className="order-1">
          <label>Date of discharge</label>
          <br />
          <input type="date" />
        </div>
        <div className="order-3">
          <label>Duration of stay</label>
          <br />
          <input type="text" />
        </div>
        <div className="order-5">
          <label>Medical condition</label>
          <br />
          <input type="text" />
        </div>
        <div className="order-5">
          <label>Treatments Administered</label>
          <br />
          <input type="number" />
        </div>
      </form>
      <Link to="/search">
        <div className="text-center">
          <button className="bg-[#3D6189] w-[200px] text-white py-[6px] mt-6 mb-5">
            Discharge patient
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Discharge;
