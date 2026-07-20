import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import EmdrInfantil from "./pages/EMDR";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/emdr-infantil" element={<EmdrInfantil />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
