import React from "react";

function ProfileName({ profileName }) {
    return (
        <div className="profile-info">
            
        <p className="profile-name">{ profileName.name}</p>
        <img className="profile-picture" src={profileName.picture} alt={profileName.name} />
      </div>
    );
  }

export default ProfileName;