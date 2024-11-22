import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import moment from "moment"; // For formatting time
import "./InteractionLogs.scss";
const InteractionLogs = () => {
  const [logs, setLogs] = useState([]);
  const [selectedDay, setSelectedDay] = useState("2024-11-20");
  useEffect(() => {
    const fetchLogs = async () => {
      const mockLogs = [
        // Logs for 2024-11-18
        {
          id: 1,
          platform: "Instagram",
          feature: "Reels",
          count: 15,
          lastActivity: "2024-11-18 15:30:00",
        },
        {
          id: 2,
          platform: "Facebook",
          feature: "AI-Recommended Groups",
          count: 8,
          lastActivity: "2024-11-18 15:30:00",
        },
        {
          id: 3,
          platform: "Messenger",
          feature: "AI Chatbot Conversations",
          count: 5,
          lastActivity: "2024-11-18 15:30:00",
        },
        {
          id: 4,
          platform: "WhatsApp",
          feature: "AI-Powered Stickers",
          count: 4,
          lastActivity: "2024-11-18 15:30:00",
        },
        // Logs for 2024-11-19
        {
          id: 5,
          platform: "Instagram",
          feature: "AR Filters",
          count: 12,
          lastActivity: "2024-11-19 15:30:00",
        },
        {
          id: 6,
          platform: "Facebook",
          feature: "AI-Suggested Friends",
          count: 6,
          lastActivity: "2024-11-19 15:30:00",
        },
        {
          id: 7,
          platform: "Messenger",
          feature: "AI-Replied Messages",
          count: 7,
          lastActivity: "2024-11-19 15:30:00",
        },
        {
          id: 8,
          platform: "WhatsApp",
          feature: "AI-Generated Stories",
          count: 3,
          lastActivity: "2024-11-19 15:30:00",
        },
        // Logs for 2024-11-20
        {
          id: 9,
          platform: "Instagram",
          feature: "Trending Reels",
          count: 20,
          lastActivity: "2024-11-20 15:30:00",
        },
        {
          id: 10,
          platform: "Facebook",
          feature: "Video Recommendations",
          count: 10,
          lastActivity: "2024-11-20 15:30:00",
        },
        {
          id: 11,
          platform: "Messenger",
          feature: "Group Recommendations",
          count: 5,
          lastActivity: "2024-11-20 15:30:00",
        },
        {
          id: 12,
          platform: "WhatsApp",
          feature: "AI-Powered Emoji Suggestions",
          count: 6,
          lastActivity: "2024-11-20 15:30:00",
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
        return (
          <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "36px" }} />
        );
      case "Instagram":
        return (
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "36px" }} />
        );
      case "WhatsApp":
        return (
          <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "36px" }} />
        );
      case "Messenger":
        return (
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            style={{ fontSize: "36px" }}
          />
        );
      default:
        return (
          <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "36px" }} />
        );
    }
  };
  const formatTime = (time) => {
    return moment(time).format("YYYY-MM-DD h:mm A"); // Format date and time
  };
  const formatDate = (date) => {
    return moment(date).format("MMMM Do, YYYY"); // Formats the date to "Month day, Year"
  };
  return (
    <div className="interaction-logs">
      <h2>AI Interaction Tracker</h2>
      <p className="description">
        Your child interacted with these AI-powered features on Meta platforms
        today.
      </p>
      {/* Date Filter at the top right */}
      <div className="date-filter">
        <label htmlFor="day">Filter by day:</label>
        <input
          type="date"
          id="day"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        />
      </div>
      {/* Display selected date */}
      <div className="selected-date">
        <p>Date Selected: {formatDate(selectedDay)}</p>
      </div>
      <div className="platforms-container">
        {logs.map((log) => (
          <div className={`platform-log ${log.platform}`} key={log.id}>
            <div className="platform-header">
              <div className="platform-icon">{getIcon(log.platform)}</div>
              <h3>{log.platform}</h3>
              <div className="meta-box">
                <span className="count">{log.count} times</span>
              </div>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(log.count / 20) * 100}%` }}
              ></div>
            </div>
            <p className="feature">{log.feature}</p>
            <p className="last-activity">
              {formatTime(log.lastActivity)} {/* Updated to show Date & Time */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InteractionLogs;