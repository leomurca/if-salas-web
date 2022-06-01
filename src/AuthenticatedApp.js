import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AuthenticatedApp;
