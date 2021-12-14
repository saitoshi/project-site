import React from 'react';

function Menu(props) {
  return(
      <div class = "ui top inverted menu">
        <span class = "item link grey" onClick={props.onToggleMenu}>Menu</span>
      </div>
  );
}

export default Menu;
