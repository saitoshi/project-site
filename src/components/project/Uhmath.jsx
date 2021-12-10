import React from "react";
import { Header, Container } from 'semantic-ui-react';

function Uhmath() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">UH Manoa Math Review Website</Header>
        <Container text>
          <hr/>
          <p>As a result of the COVID-19 pandemic, majority of the courses at UH went to distant learning. While this did
            not affect me personally, I noticed that students in my math courses that I was a learning assistant for was. <br/>
            Then this question came up to me. <br/>
            "Why does ICS (Information and Computer Science) have a review website and not math?" <br/>

            With approval from Dr. Chyba, help Calc 1 and Calc 2 students and my friends in Math 307 Linear Algebra, I decided to create a review
            website similar to the ICS Review Website that stores worksheets and practice problems for students to review with.
          <ul>
            <li>The <a href ="https://mathuh.web.fc2.com/index.html">link</a> to the home page.</li>
            <li>The problems stored in the website are either written by me or past professors that I have gotten approval from to use.</li>
          </ul>
          </p>
        </Container>
        <div className="push"/>
      </Container>
  );
}

export default Uhmath;
