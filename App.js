// App.js

import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import './App.css';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('https://api.example.com/profiles');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="app">
      <div className="profile-list">
        <h2>Profiles</h2>
        <ProfileList profiles={profiles} onSelect={handleProfileSelect} />
      </div>
      <div className="map-container">
        <MapComponent profiles={profiles} selectedProfile={selectedProfile} />
      </div>
    </div>
  );
}

export default App;
