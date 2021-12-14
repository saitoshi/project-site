import React, { useEffect } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

function SideMenu(props) {
  const classes = cn('ui','sidebar', 'overlay','top','inverted','menu','animating',
      {'visible': props.toggleMenu}
  );

  return (
      <div className={classes}>
        <ul>
          <li className="item link" as={NavLink} exact to={"/"}>SHIN SAITO</li>
          <li className="item link" as={NavLink} exact to={"/jpn"}>日本語</li>
          <li className="item link" as={NavLink} exact to={"/resume"}>RESUME</li>
          <li className="item link" as={NavLink} exact to={"/project"}>PROJECT</li>
          <li className="item link" as={NavLink} exact to={"/essay"}>ESSAY</li>
        </ul>
      </div>
  )
}

export default SideMenu;
