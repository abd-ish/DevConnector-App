import React from 'react';
import PropTypes from 'prop-types';
function formatDate(date) {
  return new Intl.DateTimeFormat().format(new Date(date));
}
const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, current, description },
}) => {
  return (
    <div>
      <h3 class="text-dark">{school}</h3>
      <p>
        {formatDate(from)} - {!to ? 'Now' : formatDate(to)}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
