import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../screens/student/Home';
import Classroom from '../screens/student/Classroom';

import Information from '../screens/Information';
import Calendar from '../screens/Calendar';
import Assignment from '../screens/Assignment';
import Profile from '../screens/Profile';

function StudentRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/info" element={<Information />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/class">
        <Route path=":id" element={<Classroom />} />
      </Route>
      <Route path="/assignment">
        <Route path=":id" element={<Assignment />} />
      </Route>
      <Route path="/login" element={<Navigate to="/home" />} />
      <Route path="/register" element={<Navigate to="/home" />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default StudentRoutes;
