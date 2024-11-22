import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TrustMetrics from "./components/TrustMetrics/TrustMetrics";
import HomePage from "./pages/HomePage/HomePage";
import Resources from "./pages/Resources/Resources";

function App() {
	return (
		<BrowserRouter>
			{/* <TrustMetrics /> */}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="home" element={<Navigate to="/" />} />
				<Route path="resources" element={<Resources />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
