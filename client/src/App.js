import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" Component={Landing} />
            <Route exact path="/profile/:id" Component={Profile} />
          </Routes>
          <section className="container">
            <Alert />

            <Routes>
              <Route exact path="/profiles" Component={Profiles} />
              <Route exact path="/login" Component={Login} />
              <Route exact path="/register" Component={Register} />
              <Route
                exact
                path="/dashboard"
                element={<PrivateRoute Component={Dashboard} />}
              />
              <Route
                exact
                path="/create-profile"
                element={<PrivateRoute Component={CreateProfile} />}
              />
              <Route
                exact
                path="/edit-profile"
                element={<PrivateRoute Component={EditProfile} />}
              />
              <Route
                exact
                path="/add-experience"
                element={<PrivateRoute Component={AddExperience} />}
              />

              <Route
                exact
                path="/add-education"
                element={<PrivateRoute Component={AddEducation} />}
              />
              <Route
                exact
                path="/posts"
                element={<PrivateRoute Component={Posts} />}
              />
              <Route
                exact
                path="/post/:id"
                element={<PrivateRoute Component={Post} />}
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
