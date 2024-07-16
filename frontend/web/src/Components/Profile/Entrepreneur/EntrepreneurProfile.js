import React from 'react';
import { useSelector } from 'react-redux';

const EntrepreneurProfile = () => {
  const { user } = useSelector(state => state.user);

  return (
    <div>
      <h2>Entrepreneur Profile</h2>
      {/* Profile details and editing form */}
    </div>
  );
};

export default EntrepreneurProfile;
