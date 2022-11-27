import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../screens/professor/Home';

function ProfessorRoutes() {
  return (
    <Routes>
      <Route path="/calendar" element={<h1>Calendar</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/info" element={<h1>Information</h1>} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Navigate to="/home" />} />
      <Route path="/register" element={<Navigate to="/home" />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default ProfessorRoutes;
