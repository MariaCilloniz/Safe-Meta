import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrustMetrics from "./components/TrustMetrics/TrustMetrics";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>{/* <TrustMetrics /> */}</Routes>
    </BrowserRouter>
  );
}
export default App;
