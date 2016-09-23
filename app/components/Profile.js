//continue with #4 6:05 mark

import React from 'react';
import Router from 'react-router';
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');


let Profile = React.createClass({
  getIntitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    };
  },
  render: function() {
    console.log(this.props.params.username);
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile />
        </div>
        <div className="col-md-4">
          <Repos />
        </div>
        <div className="col-md-4">
          <Notes />
        </div>
      </div>
    )
  }
});

module.exports = Profile;
