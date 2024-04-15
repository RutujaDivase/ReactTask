// ProfileList.js

import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileList({ profiles, onSelect }) {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onSelect={() => onSelect(profile)}
        />
      ))}
    </div>
  );
}

export default ProfileList;

