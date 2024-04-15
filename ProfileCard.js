// ProfileCard.js

import React from 'react';

function ProfileCard({ profile, onSelect }) {
  return (
    <div className="profile-card" onClick={onSelect}>
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button>Summary</button>
    </div>
  );
}

export default ProfileCard;
