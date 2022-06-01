import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './screens/Login';
import UnauthenticatedHome from './screens/UnauthenticatedHome';

function UnauthenticatedApp() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<UnauthenticatedHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Route not found!</h1>} />
      </Routes>
    </Fragment>
  );
}

export default UnauthenticatedApp;
