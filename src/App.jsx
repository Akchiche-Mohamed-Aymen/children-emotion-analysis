import Register from "./auth/Register";
import Reset from "./auth/Reset";
import Forgot from "./auth/Forgot";
import Success from "./auth/Success";
import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import FullApp from "./main/FullApp";
import Settings from "./main/Settings";
import Show from "./Recommandations/Show";


function App() {
  return (
    <Routes>
      <Route path="/auth" >
        <Route index element={<Navigate to="register" replace />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<Reset />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="success" element={<Success />} />
      </Route>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/main" element={<FullApp/>}>
        <Route path="settings" element={<Settings/>} />
      </Route>
      <Route path="/recommandations" element={<FullApp/>}>
        <Route index element={<Show/>} />
      </Route>
    </Routes>
  );
}

export default App;
