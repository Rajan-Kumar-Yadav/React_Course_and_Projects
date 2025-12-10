import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    resume: "",
    url: "",
    about: "",
  });

  const handleChanges = (event) => {
    let newValue = event.target.value;
    let newTotalValue = { ...value, [event.target.name]: newValue };
    setValue(newTotalValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    setValue({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      subject: "",
      resume: "",
      url: "",
      about: "",
    });
  };

  const resetButtonHandle = () => {
    setValue({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      subject: "",
      resume: "",
      url: "",
      about: "",
    });
  };

  return (
    <>
      <div className="container">
        <h1>Form In React</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstname"
            onChange={handleChanges}
            required
            value={value.firstname}
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastname"
            onChange={handleChanges}
            required
            value={value.lastname}
          />
          <label htmlFor="email">email*</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChanges}
            required
            value={value.email}
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            name="contact"
            onChange={handleChanges}
            value={value.contact}
          />
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            onChange={handleChanges}
            value={value.gender}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            onChange={handleChanges}
            value={value.gender}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            onChange={handleChanges}
            value={value.gender}
          />{" "}
          Other
          <label htmlFor="subject">Subject</label>
          <select
            name="subject"
            id="subject"
            onChange={handleChanges}
            value={value.subject}
          >
            <option value="Math">Math</option>
            <option value="Physice">Physice</option>
            <option value="Chemistery">Chemistery</option>
          </select>
          <label htmlFor="resume">Resme</label>
          <input
            type="file"
            placeholder="select Resume"
            name="resume"
            onChange={handleChanges}
            value={value.resume}
          />
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            placeholder="Enter Image url"
            onChange={handleChanges}
            value={value.url}
          />
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            placeholder="Enter description"
            onChange={handleChanges}
            value={value.about}
          ></textarea>
          <button type="reset" onClick={resetButtonHandle}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
