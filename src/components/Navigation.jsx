import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Sticky } from 'semantic-ui-react';
import './style.css';

function Navigation(props) {
  return (
        <Sticky>
          <Menu size ='huge' borderless inverted color= 'teal'>
            <Menu.Item header as={NavLink} exact to={"/"}> SHIN SAITO</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item as={NavLink} exact to={"/jpn"}> 日本語</Menu.Item>
              <Menu.Item as={NavLink} exact to={"/about"}> ABOUT</Menu.Item>
              <Menu.Item as={NavLink} exact to ={"/resume"}> RESUME</Menu.Item>
              <Menu.Item as={NavLink} exact to ={"/project"}> PROJECT</Menu.Item>
              <Menu.Item as={NavLink} exact to ={"/essay"}> ESSAY</Menu.Item>
            </Menu.Menu>
          </Menu>
        </Sticky>


  );
}

export default withRouter(Navigation);
