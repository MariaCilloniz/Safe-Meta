import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faMessenger,
} from "@fortawesome/free-brands-svg-icons";
import "./InteractionLogs.scss";

const InteractionLogs = () => {
  const [logs, setLogs] = useState([]);
  const [selectedDay, setSelectedDay] = useState("2024-11-20");

  useEffect(() => {
    const fetchLogs = async () => {
      const mockLogs = [
        {
          id: 1,
          platform: "Instagram",
          feature: "Reels",
          count: 15,
          lastActivity: "2024-11-20 15:30:00",
        },
        {
          id: 2,
          platform: "Facebook",
          feature: "AI-Recommended Groups",
          count: 8,
          lastActivity: "2024-11-21 10:00:00",
        },
        {
          id: 3,
          platform: "Messenger",
          feature: "AI Chatbot Conversations",
          count: 5,
          lastActivity: "2024-11-22 12:30:00",
        },
        {
          id: 4,
          platform: "Instagram",
          feature: "AR Filters",
          count: 12,
          lastActivity: "2024-11-21 14:20:00",
        },
        {
          id: 5,
          platform: "Facebook",
          feature: "AI-Suggested Ads",
          count: 6,
          lastActivity: "2024-11-23 16:10:00",
        },
        {
          id: 6,
          platform: "WhatsApp",
          feature: "Business AI Chatbots",
          count: 4,
          lastActivity: "2024-11-23 13:50:00",
        },
        {
          id: 7,
          platform: "Instagram",
          feature: "Suggested Posts",
          count: 9,
          lastActivity: "2024-11-22 18:30:00",
        },
        {
          id: 8,
          platform: "Facebook",
          feature: "Video Recommendations",
          count: 10,
          lastActivity: "2024-11-21 09:10:00",
        },
        {
          id: 9,
          platform: "Messenger",
          feature: "AI-Replied Messages",
          count: 7,
          lastActivity: "2024-11-20 17:45:00",
        },
        {
          id: 10,
          platform: "Instagram",
          feature: "Reels AI Suggestions",
          count: 14,
          lastActivity: "2024-11-20 16:10:00",
        },
        {
          id: 11,
          platform: "Facebook",
          feature: "Group Recommendations",
          count: 5,
          lastActivity: "2024-11-23 10:30:00",
        },
        {
          id: 12,
          platform: "WhatsApp",
          feature: "AI Automated Replies",
          count: 3,
          lastActivity: "2024-11-21 11:00:00",
        },
        {
          id: 13,
          platform: "Instagram",
          feature: "Trending Reels",
          count: 20,
          lastActivity: "2024-11-22 15:30:00",
        },
        {
          id: 14,
          platform: "Facebook",
          feature: "Event Recommendations",
          count: 4,
          lastActivity: "2024-11-23 14:20:00",
        },
      ];

      // Filter logs based on selected day
      const filteredLogs = mockLogs.filter((log) =>
        log.lastActivity.startsWith(selectedDay)
      );
      setLogs(filteredLogs);
    };

    fetchLogs();
  }, [selectedDay]);

  const getIcon = (platform) => {
    switch (platform) {
      case "Facebook":
        return <FontAwesomeIcon icon={faFacebook} />;
      case "Instagram":
        return <FontAwesomeIcon icon={faInstagram} />;
      case "WhatsApp":
        return <FontAwesomeIcon icon={faWhatsapp} />;
      case "Messenger":
        return <FontAwesomeIcon icon={faMessenger} />;
      default:
        return <FontAwesomeIcon icon={faFacebook} />;
    }
  };

  return (
    <div className="interaction-logs">
      <h2>AI TRACKER</h2>

      {/* Day Filter */}
      <div className="day-filter">
        <label htmlFor="day">Filter by day:</label>
        <input
          type="date"
          id="day"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        />
      </div>

      <div className="platforms-container">
        {logs.map((log) => (
          <div className="platform-log" key={log.id}>
            <div className="platform-header">
              <div className="platform-icon">{getIcon(log.platform)}</div>
              <h3>{log.platform}</h3>
              <span>{log.count} profile views</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(log.count / 20) * 100}%` }}
              ></div>
            </div>
            <p className="feature">{log.feature}</p>
            <p className="last-activity">{log.lastActivity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractionLogs;
