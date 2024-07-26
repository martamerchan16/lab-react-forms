import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [graduated, setGraduated] = useState(false);

  const handleFullNameChange = event => {
    const { value } = event.target
    setFullName(value)
  }

  const handleImageChange = event => {
    const { value } = event.target
    setImage(value)
  }
  const handleEmailChange = event => {
    const { value } = event.target
    setEmail(value)
  }
  const handlePhoneChange = event => {
    const { value } = event.target
    setPhone(value)
  }
  const handleGraduatedChange = event => {
    const { checked } = event.target
    setGraduated(checked)
  }

  const addNewStudent = newStudent => {
    const fullStudents = [newStudent, ...students]
    setStudents(fullStudents)
  }
  const handleFormSubmit = event => {
    event.preventDefault()
    const studentData = { fullName, image, phone, email, graduated }
    addNewStudent(studentData)
  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" onChange={handleFullNameChange} value={fullName} type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input name="image" onChange={handleImageChange} value={image} type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input name="phone" onChange={handlePhoneChange} value={phone} type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input name="email" onChange={handleEmailChange} value={email} type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input checked={graduated} onChange={handleGraduatedChange} name="graduated" type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
