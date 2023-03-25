import React, { useState } from 'react';
import background from './BackGroundImage1.jpg';
import axios from 'axios';

function RegistrationForm() {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [lang, setLang] = useState('');

  async function saveform(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/root/add",
        {
          firstname: fname,
          lastname: lname,
          age: age,
          email: email,
          gender: gender,
          known_language: lang
        });

      alert("Employee Registration Successfully");
      window.location.reload(true);

      // console.log(lang+" "+gender);
      // setFname("");
      // setLname("");
      // setAge("");
      // setEmail("");
      // setGender('');
      // setLang("");

    }
    catch (err) {
      alert("User Registration Failed");
    }
  }

  return (
    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      <div>
        <div className="main" >
          <div className="register">
            <h2>Register Here</h2>
            <form id="register" method="post">
              <label>First Name :</label>
              <br />
              <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} className="name" placeholder="Enter the first name:"></input>
              <br />
              <label>Last Name :</label>
              <br />
              <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className="name" placeholder="Enter the last name:"></input>
              <br />
              <label>Your Age :</label>
              <br />
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="name" placeholder="How old are you?"></input>
              <br />
              <label>Email:</label>
              <br />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="name" placeholder="Enter a valid Email id:"></input>
              <br />
              <label>Gender :</label>

              &nbsp;&nbsp;&nbsp;

              <div class="form-check form-check-inline">
                <input className="form-check-input" type="radio" value={gender} onChange={(e) => setGender("Male")} name="inlineRadioOptions" id="inlineRadio1" />
                <label className="form-check-label" HTMLFor="inlineRadio1">Male</label>
                &nbsp;&nbsp;&nbsp;
                <input className="form-check-input" type="radio" value={gender} onChange={(e) => setGender("Male")} name="inlineRadioOptions" id="inlineRadio2" />
                <label className="form-check-label" HTMLFor="inlineRadio2">Female</label>
              </div>

              <label>Known language :</label>
              &nbsp;&nbsp;&nbsp;
              <input type="text" value={lang} onChange={(e) => setLang(e.target.value)} className="name" placeholder="Enter your known languages:"></input>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <br />

              <div className='button'>
                <button id="submit" onClick={(e) => saveform(e)} className="btn btn-primary">Save</button>
              </div>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
