import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        {/* Маршрут для страницы входа */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
