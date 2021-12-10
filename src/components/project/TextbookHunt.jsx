import React from "react";
import '../style.css';
import { Header, Container, Grid, Image } from 'semantic-ui-react';

function TextbookHunt() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">Textbook Hunt</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> Software Engineering, Meteor, React</p>
          <br/>
        </Grid>
        <Container text>
          <hr/>
          <p>
            <b><u>OVERVIEW OF ICS 314</u></b>
            <br/>
            ICS 314 is the first semester and introduction course of Software Engineering. The first half of the semester consisted it of learning JavaScript and other Software Engineering facts.
            <br/>
            To finish of the semester with ICS 314, the professor in charge breaks students into groups of 3 to 5 people to create an application using Meteor, React, JavaScript, and other tools that were taught in the course over the semester. Textbook Hunt, an application that the group I participated was created so college students can sell used textbooks and purchase textbooks for a reasonable price.
            <br/>
            <ul>
              <li> For the GitHub Repository <a href = "https://github.com/textbookhunt/textbookhunt">page</a></li>
              <li> For the GitHub Organization <a href ="https://textbookhunt.github.io/">Page</a></li>
            </ul>
            <Image src={"https://saitoshi.github.io/images/textbookhunt.png"} size='large' centered />

            <b> Project Contribution </b> <br/>
            As mentioned previously, the purpose of this project was to practice the tools and methods on what we learned over the semester and applying proper teamwork ethics. Especially, with COIVD-19 lock down going, communication was essential. For this project, our team created issues or tasks to do where every week we sign up the one we are able or willing to do.
            <br/>
            <b> Week 1 Tasks </b> <br/>
            For the first week, I have set up the page where students can sign up their books to sell and a page where it lists the possible textbooks that students can see that are on sale. To take a good look on what I was assigned, feel free to visit Milestone 1.
            <br/>
            <b> Week 2 Tasks </b> <br/>
            For the second week, I have set up the advanced settings of what I did in the first week. For example, making the display cleaner and organized and have the navigation bar move as the user scrolls down the page.
            <br/>
            <b> Week 3 Tasks </b> <br/>
            For the third week, I have cleaned up the final things such as moving the comments section and creating an Admin access where the admin can delete and edit books that might not seem appropriate.
            <br/>
            Overall by participating in this project, I have learned better scheduling. Since this project was assigned during the COVID-19 lock down, I had to create an efficient schedule and remind myself that time will only run out and continue working. Additionally, I have found a way to communicate to my team members without making them mad or furious.
            <div class="push">
            </div>

          </p>
        </Container>
        <div className="push"/>
      </Container>



  );
}

export default TextbookHunt;
