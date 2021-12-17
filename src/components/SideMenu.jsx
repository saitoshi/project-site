import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Sticky, Sidebar, Icon, Image } from 'semantic-ui-react';
import './style.css';

function SideMenu() {
  return (
      <Sticky>
      <Sidebar
        as = {Menu}
        animation='overlay'
        icon='labeled'
        inverted
        color= 'blue'
        vertical
        visible
        width='thin'>
        <Menu.Item header as={NavLink} exact to={"/"}><Icon name='user circle outline'/>SHIN'S WORK </Menu.Item>
        <Menu.Item as={NavLink} exact to ={"/resume"}><Icon name='star outline'/> ABOUT</Menu.Item>
        <Menu.Item as={NavLink} exact to ={"/project"}><Icon name ='edit outline'/> WORK</Menu.Item>
      </Sidebar>
      </Sticky>

  );
}
export default SideMenu;
