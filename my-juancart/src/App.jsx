import React from "react";
import TestPage from "./pages/TestPage";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<TestPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
