import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class SideBar extends Component {
  static propTypes = {
    routes: PropTypes.objectOf({name: PropTypes.string, path: PropTypes.string}),
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      active: true
    }
  }

  handleVisibleChange = () => {
    this.setState(prev => ({active: !prev.active}))
  }

  render() {
    const { active } = this.state;

    return (
      <div className={classNames("sidebar", {active})}>
        <div className="links">
          {this.props.routers.map(item => (
            <div key={item.path}>
              <Link to={item.path} key={item.path}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div 
          className={classNames('fa', 'arrow', `fa-chevron-${active ? 'right' : 'left'}`)} 
          onClick={this.handleVisibleChange}
        />
      </div>
    );
  }
}

export default SideBar;
