import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    company,
    website,
    status,
    location,
    social,
    user: { avatar, name },
  },
}) => {
  return (
    <div class="profile-top bg-primary p-2">
      <img class="round-img my-1" src={avatar} alt="" />
      <h1 class="large"> {name}</h1>
      <p class="lead">
        {status} {company && <span> at {company}</span>}{' '}
      </p>
      <p>{location}</p>
      <div class="icons my-1">
        {website && (
          <Link to={website} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-globe fa-2x"></i>
          </Link>
        )}

        {social && social.twitter && (
          <Link to={social.twitter} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter fa-2x"></i>
          </Link>
        )}

        {social && social.facebook && (
          <Link
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook fa-2x"></i>
          </Link>
        )}

        {social && social.linkedin && (
          <Link
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </Link>
        )}

        {social && social.youtube && (
          <Link href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-2x"></i>
          </Link>
        )}

        {social && social.instagram && (
          <Link
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
