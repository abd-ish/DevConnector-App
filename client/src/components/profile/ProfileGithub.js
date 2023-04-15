import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profile';
import { Link } from 'react-router-dom';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">
        <i className="fab fa-github"></i> Github Repos
      </h2>

      {repos.map((repo) => (
        <div className="repo bg-white p-1 my-1" key="repo_id">
          <div>
            <h4>
              <Link
                to={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </Link>
            </h4>
            <p>
              {repo.description === null ? (
                <small>No description added by the author </small>
              ) : (
                repo.description
              )}
            </p>
          </div>
          <div>
            <ul>
              <li className="badge badge-primary">
                Stars : {repo.stargazers_count}
              </li>
              <li className="badge badge-dark">Watch: {repo.watchers_count}</li>
              <li className="badge badge-light">Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
