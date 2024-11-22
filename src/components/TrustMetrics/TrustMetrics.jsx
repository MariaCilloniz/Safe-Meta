import React, { useEffect, useState } from "react";
import { getMetrics } from "../../api/TrustMetrics/TrustMetrics"


function TrustMetrics() {
    const [trustMetrics, setTrustMetrics] = useState(null);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const data = await getMetrics();
                setTrustMetrics(data); // Set the fetched data
            } catch (error) {
                console.error("Error fetching Trust Metrics:", error);
                setTrustMetrics({ error: "Failed to fetch Trust Metrics." }); // Set an error object
            }
        };

        fetchMetrics();
    }, []);

    if (trustMetrics?.error) {
        return <div>{trustMetrics.error}</div>;
    }

    // Fallback while data is not yet loaded
    if (!trustMetrics) {
        return <div>Loading...</div>;
    }

    const { dataTransparency, aiAccountability, privacyGrade } = trustMetrics;

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Trust Metrics</h1>

            {/* Data Transparency Section */}
            <section>
                <h2>Data Transparency</h2>
                <p><strong>Data Collected:</strong> {dataTransparency.dataCollected.categories.join(", ")}</p>
                <h4>Usage:</h4>
                <ul>
                    {Object.entries(dataTransparency.dataCollected.usage).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </li>
                    ))}
                </ul>
                <h4>Opt-Out Options:</h4>
                <ul>
                    {Object.entries(dataTransparency.dataCollected.optOutOptions).map(([key, value]) => (
                        <li key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}: {value ? "Enabled" : "Disabled"}
                        </li>
                    ))}
                </ul>
            </section>

            {/* AI Accountability Section */}
            <section>
                <h2>AI Accountability</h2>
                <h4>Principles:</h4>
                <ul>
                    {aiAccountability.principles.map((principle, index) => (
                        <li key={index}>{principle}</li>
                    ))}
                </ul>
                <h4>Policies:</h4>
                <ul>
                    {aiAccountability.policies.map((policy, index) => (
                        <li key={index}>{policy}</li>
                    ))}
                </ul>
            </section>

            {/* Privacy Grade Section */}
            <section>
                <h2>Privacy Grade</h2>
                <p><strong>Score:</strong> {privacyGrade.score}/100</p>
                <h4>Improvement Tips:</h4>
                <ul>
                    {privacyGrade.improvementTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default TrustMetrics;
