import React from "react";
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function RadGrad2() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">RadGrad 2.0</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> <b> Software Engineering, Meteor, React </b> <br/></p>
        </Grid>
        <Grid textAlign="center">
          <p><span className="bold-list"> 2021-07-31</span> </p>
        </Grid>
        <Container text>
          <hr/>
          <b><u>Overview</u></b> <br/>

          RadGrad is an application in which registered ICS students can use as a undergraduate career planner.
          For example, if a certain student is interested in cybersecurity, using RadGrad they are able to see the recommended courses and possible intern programs.
          Furthermore, RadGrad also has a point system in which as students advance through their studies they level up.
          <Image src={"https://www.radgrad.org/assets/images/ice-example-b89aedaa1bd783119aca969f47745f02.png"} size='large' centered/>
          <div className="comment"> A sample landing page of RadGrad (as of May 26, 2021)</div>
          <ul>
            <li> For the repository <a href="https://github.com/radgrad/radgrad2">page</a></li>
            <li> For the organization <a href={"https://www.radgrad.org/"}>page</a></li>
          </ul>
          <Header as ='h3'>Contributions to RadGrad</Header>
          <b><u>Week 1 Tasks</u></b><br/>
          For this project, we used the GitHub Project <i>Kanban</i> Board to list the different issues that need to be worked on.
          In the first week, the intern group concentrated on the welcoming task which centered around on reviewing the rules and conducts,
          the research progress, and some review or learning Javascript and TypeScript.<br/>
          Additionally, for the first week issues, we were asked to write essays on the different topics. Below here are the link to the essays.
          <ul>
            <li><NavLink exact to = "/radgradreview">RadGrad Reivew </NavLink></li>
            <li><NavLink exact to = "/radgradfeedback">Comments on the Current RadGrad</NavLink></li>
            <li><NavLink exact to = "/radgradstart">Review and Writing Code</NavLink></li>
          </ul>
          <Image src={'https://github.com/saitoshi/images/blob/main/RadGradTask3.gif?raw=true'} size='big' centered/>
          <div className="comment">A sample gif from one of the coding tasks.</div>
          <b><u>Week 2 Tasks</u></b><br/>
          For the second week, we were given a list of good first issues and good second issues to work on.
          Each member of the team selected an issue to work on. For instance, one of the first good issue I worked on was adding
          ErrorFields to all of the AutoForms. After working on the first issue, I started to modify all the call statement into callPromise() and modifying
          the error statement into a try and catch format. <br/>
          <b><u>Week 3 Tasks</u></b><br/>
          With the first and second good issues accomplished, Professor Johnson and Professor Moore modified the project board on GitHub to be organized where
          there are two columns: Intern Issues & Professor Issues. With me being an intern, here are the following things I have accomplished over the third week.
          <ul>
            <li>Adding an optional picture field where users can add image for courses, interests, and career. </li>
            <li>Fixing the update button such that when a user clicks on it, it will scroll the user back up to the page where the editable forum is located.</li>
            <li>Created a Show More/Less Student button for the student display in the Career, Interest, and Opportunitie page. </li>
            <li>Modified the Terms and Condition Page where users can agree or disagree at the page rather than doing it at the checklist component.</li>
          </ul>
          <Image src={'https://github.com/saitoshi/images/blob/main/radgradtask/week3.gif?raw=true'} size='big' centered/>
          <div className='comment'>A sample gif of the updates I made in Week 3.</div>
          <b><u>Week 4/5 Tasks</u></b><br/>
          For Week 4 and 5 two things were concentrated for the project. One was the normal programming related tasks.
          For example, currently only students are able to add opportunities and courses to their profiles. However, I made modifications to the profile collection where Advisors
          and Faculties are able to add it to their profile.
          <br/>
          The other thing that the group of interns was making a promotional video for RadGrad2.
          The video's main purpose is to display it for the National Science Foundation (NSF) which is a sponsor for the RadGrad Research.
          The video making was broken up into the following tasks. However, due to the interns working from home a traditional filming where everyone gathers into
          one place. Therefore, we had to improvise on the filming to be different.
          <ul>
            <li>Screenplay: Shin Saito</li>
            <li>Video Editing: Trey Sumida</li>
          </ul>
          <b><u>Week 6/7 Tasks</u></b><br/>
          After creating the video, the project went back on working the application itself revising the necessary portions such as consistency.
          For instance, the interests cards are now updated so that it is alphabetically organized rather than a meaningless order.
          Additionally the visibility tabs were organized as the tab and the checklist order did not match. Users with the role of faculty and advisors can now add
          opportunities to their user profile and that if they are not part of an opportunity group a message will display rather than blank.
          <Image src={"https://github.com/saitoshi/images/blob/main/user_opportunity.png?raw=true"} size='large' centered/>
          <div className='comment'>A screenshot of the a comment displaying that a user has not opportunity with them.</div>
          <br/>
          <b><u>Week 8/9 Tasks</u></b><br/>
          During week 8 and 9, a pilot study was held with undergraduate students from Computer Science students. Depending on the participants preference,
          the pilot study was held on either Zoom or Discord. With the set of questions written by Professor Johnson, the student interns asked the participants
          what they felt about the current RadGrad system and how it could be further improved.
          <b><u>Week 10</u></b><br/>
        The last week of RadGrad we participated in the UH Research Group Presentation. Here the group participated in a Zoom Meeting where we created a poster presenting the
        results of the Pilot Study done during Week 8 and 9. Additionally, a research paper was written to show the res ult of the Pilot Study.
        <br/>
        <b><u>Take Back From RadGrad Internship</u></b><br/>
        This internship gave me a preview on working as a Software Engineer.<br/>
        I think this gave me the opportunity to see what my current JavaScript and TypeScript skills. Furthermore, this internship was more
        freestyle than anything. We were given a list of task to select from to work on. By having the free choice, I can see what I am capable of and not.
        <b>Link to the paper</b>
        Thus, giving me an area to see where I need to improve on.
        </Container>
        <div className ="push"/>
      </Container>


  );
}

export default RadGrad2;
