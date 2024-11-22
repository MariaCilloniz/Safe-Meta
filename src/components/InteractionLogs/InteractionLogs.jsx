import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InteractionLogs.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

const InteractionLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Fetch logs from the backend
    axios
      .get(`${BASE_URL}/api/logs`)
      .then((response) => setLogs(response.data))
      .catch((error) => console.error("Error fetching logs:", error));
  }, []);

  return (
    <div className="interaction-logs">
      <h2 className="interaction-logs__title">
        Your Child’s AI Interactions This Week
      </h2>
      <div className="interaction-logs__card-container">
        {logs.map((log) => (
          <div className="interaction-logs__card" key={log.id}>
            <h3 className="interaction-logs__platform">{log.platform}</h3>
            <p className="interaction-logs__feature">{log.feature}</p>
            <p className="interaction-logs__count">
              <strong>{log.count}</strong> interactions
            </p>
            <p className="interaction-logs__last-activity">
              Last Activity: {new Date(log.lastActivity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractionLogs;
