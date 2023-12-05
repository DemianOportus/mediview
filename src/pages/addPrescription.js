function AddPrescription() {
    return(
        <div className="mt-20">
            {/* Need to change 'X patient' to name of the patient from whose file the user
            clicked 'Add prescription'*/}
            <h1 className="font-bold text-[50px] text-center mb-8">Add prescription for X patient</h1> 
            <form className="md:grid md:grid-cols-2 md:place-items-center xl:mx-36">
                <div className="order-1">
                    <label>Medication name</label><br/>
                    <input type="name"/>
                </div>
                <div className="order-3">
                    <label>Method of administration</label><br/>
                    <input type="name"/>
                </div>
                <div className="order-5">
                    <label>Dosage</label><br/>
                    <input type="name"/>
                </div>
                <div className="order-2">
                    <label>Frequency</label><br/>
                    <input type="name"/>
                </div>

                <div className="order-4">
                    <label>Start date</label><br/>
                    <input type="date"/>
                </div>
                <div className="order-8">
                    <label>End date</label><br/>
                    <input type="date"/>
                </div>
            </form>
            <div className="text-center">
            {/* Need to add link to 'Add prescription' button which leads the user back 
            to the patient's file with the added prescription*/}
            <button 
                className="bg-[#3D6189] w-[250px] text-white py-[6px] mt-6 mb-5">
                Add prescription
            </button>
            </div>
        </div>
    )
}

export default AddPrescription;