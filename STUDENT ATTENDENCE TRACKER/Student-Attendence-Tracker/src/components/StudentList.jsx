// src/components/StudentList.jsx
import "./StudentList.css";

function StudentList({ students, onMarkAttendance }) {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul>
          {students.map((stu) => (
            <li key={stu.id} className="student-item">
              <div>
                <strong>{stu.name}</strong> <br />
                <small>
                  Present: {stu.presentDays} / Total: {stu.totalDays}
                </small>
              </div>

              <div className="attendance-buttons">
                <button
                  className="present-btn"
                  onClick={() => onMarkAttendance(stu.id, "present")}
                >
                  Present
                </button>
                <button
                  className="absent-btn"
                  onClick={() => onMarkAttendance(stu.id, "absent")}
                >
                  Absent
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
