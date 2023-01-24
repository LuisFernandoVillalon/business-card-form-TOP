import React, { useState } from "react";
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import PDF from './components/PDF/PDF.js';

function App() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [profilePicture, setProfilePicture] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [position, setPosition] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [city, setCity] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const [school, setSchool] = React.useState("");
  const [eduCity, setEduCity] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [eduStartDate, setEduStartDate] = React.useState("");
  const [eduEndDate, setEduEndDate] = React.useState("");
  

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Form
         firstName={firstName} setFirstName={setFirstName}
         lastName={lastName} setLastName={setLastName}
         jobTitle={jobTitle} setJobTitle={setJobTitle}
         profilePicture={profilePicture} setProfilePicture={setProfilePicture}
         address={address} setAddress={setAddress}
         phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
         email={email} setEmail={setEmail}
         description={description} setDescription={setDescription}

         position={position} setPosition={setPosition}
         company={company} setCompany={setCompany}
         city={city} setCity={setCity}
         startDate={startDate} setStartDate={setStartDate}
         endDate={endDate} setEndDate={setEndDate}

         school={school} setSchool={setSchool}
         eduCity={eduCity} setEduCity={setEduCity}
         degree={degree} setDegree={setDegree}
         eduStartDate={eduStartDate} setEduStartDate={setEduStartDate}
         eduEndDate={eduEndDate} setEduEndDate={setEduEndDate}

         />
        <PDF 
        firstName={firstName}
        lastName={lastName} 
        jobTitle={jobTitle} 
        profilePicture={profilePicture} 
        address={address} 
        phoneNumber={phoneNumber} 
        email={email} 
        description={description} 

        position={position}
        company={company}
        city={city}
        startDate={startDate}
        endDate={endDate}

        school={school} 
        eduCity={eduCity} 
        degree={degree} 
        eduStartDate={eduStartDate} 
        eduEndDate={eduEndDate} 
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
