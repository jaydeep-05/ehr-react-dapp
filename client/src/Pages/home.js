import React from 'react';
import '../styles.css'


const Home = () => {
  return (
    <div className="home-container">
      <div className="jumbotron">
        <h1>Electronic Health Record Management System</h1>
        <h2>Using Ethereum Blockchain</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h3>How Our System Can Help You</h3>
            <p>Our electronic health record management system provides a secure and efficient way for healthcare providers to manage patient records. By using blockchain technology, we ensure that all patient data is encrypted and tamper-proof, while also allowing for easy access and sharing of records between providers.</p>
          </div>
          <div className="col-md-6">
            <h3>About Our System</h3>
            <p>Our system is built using the latest blockchain technology to provide the highest level of security and reliability. We have a team of experienced developers and healthcare professionals working together to ensure that our system meets the needs of providers and patients alike.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;