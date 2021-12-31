import React from "react";
import { Header, Container, Card, Image } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

function Blog() {
    const pageStyle = {
        paddingLeft: '10em',
        paddingTop: '1em',
      };

    return (
    <Container style = {pageStyle}>
         <Header as = "h2" textAlign="center">Blog</Header>
         <div className="comment">Some blog like post I have written.</div>
         <hr/>
         <Card.Group itemsPerRow={3} centered>
         <Card as = {NavLink} exact to = "/newyear2022">
            <Image src="https://www.store-express.com/img/goods/C/18-178-1_main.jpg"/>
            <Card.Content>
              <Card.Header textAlign='center'>New Year 2022 Resolution</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2021-12-31</span>
              </Card.Meta>
              <Card.Description>
                An essay reflecting on 2021 and listing goals for 2022.              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Essay<br/>
            </Card.Content>
          </Card>
         </Card.Group>

    </Container>
    );
} export default Blog;