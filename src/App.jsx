import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landingpage';

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-500">
      <div className="w-[430px] h-screen flex flex-col bg-white shadow-lg">
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}