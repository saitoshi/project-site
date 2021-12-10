import React from "react";
import '../style.css';
import { Header, Container, Grid, Image } from 'semantic-ui-react';

function Shocking() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">Shocking Emissions</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> Software Engineering, Meteor, React</p>
          <br/>
        </Grid>
        <Container text>
          <hr/>
          <p>
          <b><u>OVERVIEW OF ICS 414</u></b>
          <br/>
          For ICS 414 Software Engineering II, the course teamed up with <a href="http://www.hei.com/"> Hawaii Electric Industries </a> on creating an application that allows users to see their Green House Gases. The students were grouped into four teams of 6-7 people. The team I worked on was called “Shocking Development” and the application we created was called “Shocking Emissions”.
          <ul>
            <li>For the Github <a href ="https://github.com/shocking-development/shockingdevelopment">Repository</a></li>
            <li> For the Project Group <a href = "https://shocking-development.github.io/">Page</a></li>
          </ul>
            <Image src={"https://shocking-development.github.io/doc/landingPageM4.png"} size='large' centered/>
          <div className="comment">The landing page of Shocking Emissions.</div>
            <u><b> Contributions to Shocking Emissions</b></u>
            <br/>
            The different issues that were worked on for the projects were broken down into Milestones. Roughly every milestone was done in two weeks.
            <br/>
            <b> <a href ="https://github.com/shocking-development/shockingdevelopment/projects/1"> Milestone 1 </a></b> <br/>
            For Milestone 1, I created the basic mock up on what each page should look like and then created an initial design on
            the profile, log in, register (sign up) pages. <br/>
            <b> <a href="https://github.com/shocking-development/shockingdevelopment/projects/2"> Milestone 2</a></b>
            <br/>
            For Milestone 2, I participated in a group review and helped out with the profile database.
            <br/>
            <b><a href="https://github.com/shocking-development/shockingdevelopment/projects/3"> Milestone 3</a></b>
            <br/>
            For Milestone 3, I particpated in another group review, made fix ups on the profile page where the profile card
            shows the user's profile image, modified the edit profile page to have the image column, and finally modified
            the admin capabilities.
            <br/>
            <b><a href="https://github.com/shocking-development/shockingdevelopment/projects/4">Milestone 4</a></b><br/>
            By Milestone 4, 90% of the application was set and running. At this stage each members were adding small modifications
            to improve the application. My contribution was that I added an option so users can change units from US units to Metric System units.
            <br/>
            <b><a href="https://github.com/shocking-development/shockingdevelopment/projects/5">Milestone 5</a></b>
            <br/>
            At Milestone 5, the group goal was to deploy the project to Digital Ocean and input some sample datas for multiple test users.
            To create the fake data of users and the green house gas usages, the group created a random generator using
            <a href= "https://www.npmjs.com/package/faker">Faker.js</a> where 20+ fake users and for each user 3 months of fake but beliveable data was created.
            <br/>
            <b><a href="https://github.com/shocking-development/shockingdevelopment/projects/6">Milestone 6</a></b>
            <br/>
            For the last milestone, the main goal was to clean up the codes or functions on the application. For instance, I checked to see whether the files had appropriate comments or not. Additionally, per request of the customer a contact to Admin page was created.
            <br/>
            <Image src={"https://saitoshi.github.io/images/shockingemissions.gif"} size='large' centered />
            <div className="comment">The sample gif of the application itself.</div>
            <u><b>Challeges to the Project</b></u>
            <ul>
              <li> <b> Time Management </b> <br/></li>
              Unlike ICS 314, this course worked on a single project for one semester long. While one semester might look like a long time, because of taking other courses it flew by fast. Furthermore, since there was a semester to work on the application, there was no excuse to perfect it.
              Therefore, time management was an important thing. One way was that our group took the milestone to our advantage by making milestone goals. For instance, milestone 1 had a goal to perfect the design or milestone 5 had a goal to perfect the fake data and its display.
              <li> <b> Communication</b></li>
              Since most of the communication was done through Discord using words, I had to be clear and concise on what I wanted to say. Especially, with a group so big that becomes important as a single small miscommunication may mess up any progress.
              <li> <b> Awkward Silences</b></li>
              With work being online, there are moments of “Awkward Silences”. However, I believe that they are a waste of time. To avoid silence during group meetings, I tried to ask questions or start a conversation to see which areas need to be worked on.
            </ul>
            <Image src={"https://saitoshi.github.io/images/discord.png"} size='large' centered/>
            <div className="comment">A screenshot of the group Discord chat server.</div>
            <br/>
            <u><b>Take Back From ICS 414</b></u>
            <br/>
            Despite going to school for a certain period, I have never worked in a large group. With the pandemic making this semester online, I have expected some issues to happen. However, the major issues that I have expected never happened. What my group did was set two meetings per week at a time where all of us could meet. Additionally, we created a Discord server for the team to do either word or voice chats.
            <br/>
            Furthermore, with the class being held online I personally think that it helped me to prepare for after graduation. I do expect the pandemic to continue, therefore, forcing things to remain online.
            <br/>
            Another factor that made the course helpful is because we had a customer. While the future is uncertain, I do expect that I will have to build applications based on customer preferences. Previously, I worked on projects based on requirements on a syllabus or instructor’s guidelines. However, by having a customer, frequent communications needed to be made to truly understand their expectations of the product.
      <div class="push">
      </div>

</p>
        </Container>
        <div className="push"/>
        </Container>



  );
}

export default Shocking;
