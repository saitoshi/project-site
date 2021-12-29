import React, { useState, useEffect } from "react";
import { Header, Container, Tab, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import Markdown from 'markdown-to-jsx'; 


function NewYears2022() {
  const fileName = 'essay2022.md';
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`./markdown/english/${fileName}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});
  const pageStyle = {
        paddingLeft: '10em',
        paddingTop: '1em',
      };

      const panes2022 = [
        { menuItem: 'English', render: () => <Tab.Pane><Markdown>{post}</Markdown></Tab.Pane> },
        { menuItem: '日本語', render: () => <Tab.Pane>近日公開</Tab.Pane> },
      ]
      return (
          <Container style = {pageStyle}>
              <Header as = "h2" textAlign="center">Happy New Years to 2022</Header>
              <Grid textAlign="center">
          <p>Life, Essay</p>
        </Grid>
        <Grid textAlign="center">
          <p><span className="bold-list">December 31, 2021</span></p>
        </Grid>
        <br/>
        <hr/>
                <Tab menu={{ secondary: true, pointing: true }} panes = {panes2022}/>
            
              <div className="push"/>
          </Container>
      );
}

export default NewYears2022;