import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Button, Sidebar, Icon } from 'semantic-ui-react';
import './style.css';

class SideMenu extends React.Component {
  state = {
    visible: false,
    visible2: false,
  }

  handleShowClick = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  }

  handleShowClick2 = () => {
    this.setState((prevState) => ({
      visible2: !prevState.visible2,
    }));
  }
  render() {
    const { visible } = this.state;
  
  return (
    <div>
    <Button style={{ position: 'fixed', zIndex: 1, top: 0, height: '100vh', borderRadius: 0 }} attached={'right'} icon color='teal' disabled={false} onClick={this.handleShowClick}>
     <Icon name='bars'/>
   </Button>
   <Sidebar 
   as = {Menu}
   animation='push'
   direction='left'
   icon = 'labeled'
   vertical 
   inverted
   visible = {visible}
   width='thin'
   color = 'teal'
   style={{ height: '100vh', minHeight: '100vh' }}>
           <Button fluid style={{ zIndex: 2 }} icon color='teal' disabled={false} onClick={this.handleShowClick}>
       <Icon name='bars'/>
       <br/>
       <br/>
       <Menu.Item header as={NavLink} exact to={"/"}><Icon name='user circle outline'/>SHIN'S WORK </Menu.Item>
        <Menu.Item as={NavLink} exact to ={"/resume"}><Icon name='star outline'/> ABOUT</Menu.Item>
        <Menu.Item as={NavLink} exact to ={"/project"}><Icon name ='edit outline'/> WORK</Menu.Item>
        <Menu.Item as={NavLink} exact to ={"/blog"}><Icon name ='sticky note outline'/> BLOG</Menu.Item>
        <Menu.Item as={NavLink} exact to ={"/about"}><Icon name ='flag outline'/> 日本語</Menu.Item>
     </Button>
   </Sidebar>
 </div>

  );}
}
export default SideMenu;
