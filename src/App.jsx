import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrustMetrics from "./components/TrustMetrics/TrustMetrics";

function App() {
	return (
		<BrowserRouter>
		<TrustMetrics/>
			<Routes>
			</Routes>
		</BrowserRouter>
	)
}
export default App;
