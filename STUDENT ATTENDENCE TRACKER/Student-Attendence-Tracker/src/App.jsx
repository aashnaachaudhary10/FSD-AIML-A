// src/App.jsx
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  // Add student
  const addStudent = (name) => {
    if (!name.trim()) return;
    const newStudent = {
      id: Date.now(),
      name,
      presentDays: 0,
      totalDays: 0,
    };
    setStudents([...students, newStudent]);
  };

  // ✅ Mark attendance
  const markAttendance = (id, status) => {
    const updated = students.map((stu) => {
      if (stu.id === id) {
        return {
          ...stu,
          totalDays: stu.totalDays + 1,
          presentDays: status === "present" ? stu.presentDays + 1 : stu.presentDays,
        };
      }
      return stu;
    });
    setStudents(updated);
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudent onAddStudent={addStudent} />
      <StudentList students={students} onMarkAttendance={markAttendance} />
    </div>
  );
}

export default App;
