import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu pointing>
          <Link to='/'>
            <Menu.Item name='Home' active={this.activeItem('/')} />
          </Link>
          <Link to='/all_beers'>
            <Menu.Item name='Beers' active={this.activeItem('/all_beers')} />
          </Link>
          <Link to='/all_breweries'>
            <Menu.Item name='Breweries' active={this.activeItem('/all_breweries')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/'>
              <Menu.Item name='DPS React Assessment' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
