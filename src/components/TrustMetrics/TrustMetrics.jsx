import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { getMetrics } from "../../api/TrustMetrics/TrustMetrics"
import './TrustMetrics.scss'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function TrustMetrics() {
    const [trustMetrics, setTrustMetrics] = useState(null);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const data = await getMetrics();
                setTrustMetrics(data);
            } catch (error) {
                console.error("Error fetching Trust Metrics:", error);
                setTrustMetrics({ error: "Failed to fetch Trust Metrics." });
            }
        };

        fetchMetrics();
    }, []);

    if (trustMetrics?.error) {
        return <div>{trustMetrics.error}</div>;
    }

    if (!trustMetrics) {
        return <div>Please Wait </div>;
    }

    const { dataTransparency, privacyGrade } = trustMetrics;

    const doughnutData = {
        labels: dataTransparency.dataCollected.categories,
        datasets: [
            {
                label: "Data Collected",
                data: [40, 60, 20],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        cutout: "70%",
    };

    const barData = {
        labels: ["Personalized Ads", "Activity Tracking", "Location Tracking"],
        datasets: [
            {
                label: "Enabled",
                data: [
                    dataTransparency.dataCollected.optOutOptions.personalizedAds ? 70 : 30,
                    dataTransparency.dataCollected.optOutOptions.activityTracking ? 60 : 40,
                    dataTransparency.dataCollected.optOutOptions.locationTracking ? 50 : 50,
                ],
                backgroundColor: "#36A2EB",
            },
            {
                label: "Disabled",
                data: [
                    dataTransparency.dataCollected.optOutOptions.personalizedAds ? 30 : 70,
                    dataTransparency.dataCollected.optOutOptions.activityTracking ? 40 : 60,
                    dataTransparency.dataCollected.optOutOptions.locationTracking ? 50 : 50,
                ],
                backgroundColor: "#FF6384",
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    font: {
                        size: 12,
                        family: "Verdana", // Need to change based on aswini 
                    },
                    color: "black", // Same thing
                },
            },
            tooltip: { enabled: true },
        },
        scales: {
            x: {
                stacked: false,
                ticks: {
                    font: {
                        size: 10, 
                        family: "Verdana", // Ask aswini
                    },
                    color: "black", // Ask aswini
                },
                
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    font: { size: 10 },
                },
            },
        },
    };

    return (
        <div className="trust-metrics">
            <h1 className="trust-metrics__title">Trust Metrics</h1>


            <div className="trust-metrics__chart">
                <Doughnut
                    data={doughnutData}
                    options={doughnutOptions}
                />
            </div>


            <div className="trust-metrics__privacy">
                <p className="trust-metrics__score">
                    <strong> Privacy Score:</strong> {privacyGrade.score}/100%
                </p>
            </div>

            <div className="trust-metrics__chart">
                <Bar
                    data={barData}
                    options={barOptions}
                />
            </div>
        </div>
    );
}

export default TrustMetrics;
