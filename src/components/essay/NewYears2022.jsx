import React from "react";
import { Header, Container, Tab } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
function NewYears2022() {
    const pageStyle = {
        paddingLeft: '10em',
        paddingTop: '1em',
      };

      const panes2022 = [
        { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      ]
      return (
          <Container style = {pageStyle}>
              <Header as = "h2" textAlign="center"></Header>
          </Container>
      );
}

export default NewYears2022;