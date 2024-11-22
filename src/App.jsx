import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrustMetrics from "./components/TrustMetrics/TrustMetrics";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
