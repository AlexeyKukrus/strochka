import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage/AuthPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<AuthPage mode="signIn" />} />
        <Route path="/sign-up" element={<AuthPage mode="signUp" />} />
        <Route path="/forgot-password" element={<AuthPage mode="forgotPassword" />} />
        <Route path="/reset-password" element={<AuthPage mode="resetPassword" />} />
        <Route path="/confirm-code" element={<AuthPage mode="confirmCode" />} />
      </Routes>
    </Router>
  );
}

export default App;
