import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Resources from "./pages/Resources/Resources";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
