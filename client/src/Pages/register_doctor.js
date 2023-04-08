import React, { useState } from 'react';

const RegisterDoctor = () => {
  const [idNumber, setIdNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [allergies, setAllergies] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleAllergiesChange = (event) => {
    setAllergies(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission logic
  };

  const validateForm = () => {
    return idNumber !== '' && fullName !== '' && phoneNumber !== '';
  };

  return (
    <>
      <div className="card" style={{ border: "none", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
        <div className="card-body" style={{ paddingTop: "5px" }}>
          <h2 class="card-title">Register as a Doctor</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <h5>General Info</h5>
                <hr />
                <div className="form-group">
                  <label>ID Number</label>
                  <input type="text" className="form-control" placeholder="Enter ID Number" value={idNumber} onChange={handleIdNumberChange} required />
                </div>

                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter Full Name" value={fullName} onChange={handleFullNameChange} required />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" placeholder="Enter Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} required />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control" value={gender} onChange={handleGenderChange}>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="form-group" style={{ paddingBottom: "10px" }}>
                  <label>Date of Birth</label>
                  <input type="date" className="form-control" placeholder="Enter Date of Birth" value={dob} onChange={handleDobChange} />
                </div>
              </div>

              <div className="col-md-6">
                <h5>Qualifications</h5>
                <hr />
                <div className="form-group">
                  <label>Degree</label>
                  <select className="form-control" value={bloodGroup} onChange={handleBloodGroupChange}>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>Doctoral</option>
                    <option>Diploma</option>
                  </select>
                </div>

                <div className="form-group" style={{ paddingBottom: "10px" }}>
                  <label>Major</label>
                  <input type="text" className="form-control" placeholder="Neurology" value={allergies} onChange={handleAllergiesChange} />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={!validateForm()}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterDoctor
