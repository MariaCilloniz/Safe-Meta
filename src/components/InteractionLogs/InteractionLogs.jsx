import React from "react";
import "./InteractionLogs.scss";

const logs = [
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
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 3,
    platform: "Messenger",
    feature: "AI Chatbot Conversations",
    count: 5,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 4,
    platform: "Instagram",
    feature: "AR Filters",
    count: 12,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 5,
    platform: "Facebook",
    feature: "AI-Suggested Ads",
    count: 6,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 6,
    platform: "WhatsApp",
    feature: "Business AI Chatbots",
    count: 4,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 7,
    platform: "Instagram",
    feature: "Suggested Posts",
    count: 9,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 8,
    platform: "Facebook",
    feature: "Video Recommendations",
    count: 10,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 9,
    platform: "Messenger",
    feature: "AI-Replied Messages",
    count: 7,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 10,
    platform: "Instagram",
    feature: "Reels AI Suggestions",
    count: 14,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 11,
    platform: "Facebook",
    feature: "Group Recommendations",
    count: 5,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 12,
    platform: "WhatsApp",
    feature: "AI Automated Replies",
    count: 3,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 13,
    platform: "Instagram",
    feature: "Trending Reels",
    count: 20,
    lastActivity: "2024-11-20 15:30:00",
  },
  {
    id: 14,
    platform: "Facebook",
    feature: "Event Recommendations",
    count: 4,
    lastActivity: "2024-11-20 15:30:00",
  },
];

const getIconUrl = (platform) => {
  switch (platform) {
    case "Facebook":
      return "/assets/facebook-icon.png"; // You can place these images in your public directory
    case "Instagram":
      return "/assets/instagram-icon.png";
    case "WhatsApp":
      return "/assets/whatsapp-icon.png";
    case "Messenger":
      return "/assets/messenger-icon.png";
    default:
      return "/assets/default-icon.png"; // A default fallback icon
  }
};

const InteractionLogs = () => {
  return (
    <div className="interaction-logs">
      <h2>Interaction Logs</h2>
      {logs.map((log) => (
        <div className="platform-log" key={log.id}>
          <div className="platform-header">
            <div className="platform-icon">
              <img
                src={getIconUrl(log.platform)}
                alt={`${log.platform} icon`}
              />
            </div>
            <h3>{log.platform}</h3>
            <span>{log.count} profile views</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(log.count / 20) * 100}%` }} // Scaled the width based on max count value
            ></div>
          </div>
          <p className="feature">{log.feature}</p>
          <p className="last-activity">{log.lastActivity}</p>
        </div>
      ))}
    </div>
  );
};

export default InteractionLogs;
