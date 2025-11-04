import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import AddResume from "./pages/AddResume";
import SignUp from "./pages/SignUp";
import EditResume from "./pages/EditResume";
import ChooseTemplate from "./pages/ChooseTemplate";
import Downlaodpdf from "./pages/Downlaodpdf";
import Login from "./pages/Login";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-resume" element={<AddResume />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="choose-template" element={<ChooseTemplate />} />
          <Route path="edit-resume/:id" element={<EditResume />} />
          <Route path="downloadPdf" element={<Downlaodpdf/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
