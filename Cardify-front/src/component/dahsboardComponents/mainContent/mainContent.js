import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import profileImage from "../../../assets/images/profile.svg";
import "./mainContent.css";

const MainContent = ({ isCollapsed }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={`main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Header Section */}
      <div className="header-search-bar">
        {/* Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Profile & Notifications */}
        <div className="profile-section">
          <div className="notifications">
            <BiBell className="notification-icon" />
          </div>
          <div className="profile-avatar">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>

      {/* Main Content Below Header */}
      <h1>Content</h1>
    </div>
  );
};

export default MainContent;
