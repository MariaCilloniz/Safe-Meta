import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const getMetrics = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/api/trust-metrics`);
        return data; 
    } catch (error) {
        console.error("Could not fetch Trust Metrics:", error);
        throw new Error("Error fetching Trust Metrics.");
    }
};

export { getMetrics };