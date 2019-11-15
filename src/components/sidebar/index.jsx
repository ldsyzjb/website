import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style/index.scss';

class SideBar extends Component {
  static propTypes = {
    routes: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="links">
          {this.props.routers.map(item => (
            <Link to={item.path} key={item.path}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="arrow"></div>
      </div>
    );
  }
}

export default SideBar;
