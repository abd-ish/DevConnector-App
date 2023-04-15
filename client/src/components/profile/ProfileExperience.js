import React from 'react';
import PropTypes from 'prop-types';
function formatDate(date) {
  return new Intl.DateTimeFormat().format(new Date(date));
}
const ProfileExperience = ({
  experience: { company, title, location, from, to, current, description },
}) => {
  return (
    <div>
      <h3 class="text-dark">{company}</h3>
      <p>
        {formatDate(from)} - {!to ? 'Now' : formatDate(to)}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
