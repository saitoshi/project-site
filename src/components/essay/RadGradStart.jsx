import React from 'react';
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import '../style.css';
import { NavLink } from 'react-router-dom';

function RadGradStart() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center"> RadGrad Initial Join Up </Header>
        <Grid textAlign = "center">
          <p> RadGrad2, Summer 2021 Internship Program, Software Engineering</p>
        </Grid>
        <Grid textAlign="center">
          <p><span className="bold-list">May 21, 2021</span></p>
        </Grid>
        <Container text>
          <br/>
          <b><u>Overview Of Issue 468 Task 6</u></b>
          <br/>
          As an introduction task to the first week of the RadGrad 2.0 Summer 2021 Internship, there was a list of tasks for newcomers to do. Issue 468 centered around programming tasks for us to get used to the RadGrad environment.
          <br/>
          <b><u>Task 1 – Hello World</u></b>
          <br/>
          Regardless of the country in which you learned programming; the first task is always called “Hello-World”. This was no different for the RadGrad summer 2021 interns too. Using the sandbox portion provided by Professor Johnson and Professor Moore, we began by writing “Hello-World”.
          However, this process also allowed us to see <span className="bold-list">components</span> unique to RadGrad such as “RadGradHeader” and the “RadGradSegment”.
          Additionally, this was the first time for me to use <a href={"https://fomantic-ui.com/"}>Fomantic UI</a> programming assignment.
          <Image src={'https://github.com/saitoshi/images/blob/main/radgrad-task1.png?raw=true'} size='huge' centered/>
          <div className="comment">A screenshot of the sandbox after Task 1.</div>
          <b><u>Task 2 - User Display</u></b>
          <br/>
          After doing Hello World, the next task is to display the user names of the sandbox owner and the current user. To do begin, I created a component that stored the header and paragraphs in a separate component file.
          Then using withTracker, I created two const called "urlUser", which stores the owner of the page and "loggedInUser" to store the current user by the help from meteor.
          The challenging part for this task was grabbing the user display, but after taking a 15 minute break the solution I ended up was the following.
          <br/>
          <Image src={'https://github.com/saitoshi/images/blob/main/task2code.png?raw=true'} size='big' centered/>
          <br/>
         <div className={'comment'}>The code I wrote to display the correct users.</div>
          To test whether the code worked I logged in as an Admin to see whether it displayed the right users. After logging in it did as it displayed radgrad@hawaii.edu as the current user and my email as the owner of the sandbox.
          <Image src={'https://github.com/saitoshi/images/blob/main/radgrad-task2.png?raw=true'} size='huge' centered/>
          <div className={'comment'}>A screenshot when I log in as radgrad@hawaii.edu.</div>
          <b><u>Task 3 - Career Goal Display</u></b>
          <br/>
          For task 3, we had to create a career goal segment in which every time it refreshes, it displayed a new career option and its description.
          Additionally, on the bottom it should display the total number of career choices available. <br/>
          For this task, similar to Task 2, I created a component in which stored the basic parts required in Task 3 and in the SandBox page recreated the interface to store the consts from Task 2 and Task 3 into one area.
          However, the difficult part was getting the consts as I had a hard time displaying the randomization of careers.
          Initially, it would only display "Data Science" for me because the Career Interests when I played with RadGrad in ICS 211 was Data Science.
          <Image src={'https://github.com/saitoshi/images/blob/main/task3.png?raw=true'} size='big' centered/>
          <br/>
          After talking to some teammates, I was able to modify the code so the job selections are randomized. I modified the consts on the Task3Component Typescript and then use the Random function.
          <Image src={'https://github.com/saitoshi/images/blob/main/RadGradTask3.gif?raw=true'} size='big' centered/>
          <div className={'comment'}>Now it displays other careers also.</div>
          <b><u>Task 4 - RadGrad Labels</u></b><br/>
          In Task 4, we were requested to work with the different labels available on RadGrad: CareerGoalLabel, InterestLabel, CourseLabel, OpportunityLabel, and UserLabel. To work on this task, I worked parts by parts to get a full understanding at first. To begin with, I started by creating and RadGradHeader of each part necessary: Career, Interest, Course, etc. After seeing that the skeleton of Task 4 working, I worked with the Mongo-related tasks. Initially, I started off by reading the article on the different labels given to us on the issue page. After that, I started off with the CareerGoalLabel.

          I began by importing the label for Career and then used the "map" function to display the label as I learned both from ICS 314 and ICS 414. After getting used to with CareerLabel, I then went down the list of InterestLabel, CourseLabel, and so on.
          Finally, working on the student or UserLabel was challenging because it was different from the previous. After using fetch as <span className="bold-list"><code>isAlumni false }, {}).fetch()</code></span> then I loaded the student labels.
          <Image src={'https://raw.githubusercontent.com/saitoshi/images/main/task4.png'} size='medium' centered/>
          <b><u>Task 5 - Interests Form</u></b><br/>
          In task 5, the assignment was to create a forum which displays all the possible interests and after the selection is made then the corresponding description is displayed. To start on this, I rewatched the screencast from Professor Johnson and looked at the project I made in
          ICS 314 and ICS 414. After setting up the basic components: RadGrad Header and RadGrad Segment, I went with working on the the interest schema basing it off of from <NavLink exact to = "/shocking">ICS 414 Shocking Development Project</NavLink>.
          The first thing I did was grabbed the list of interests by using the follwoing line of code: <code>const availableInterests = interests.map(docToName);</code>.
          <Image src={'https://raw.githubusercontent.com/saitoshi/images/main/radgradtask/task5/task5code.png'} size='big' centered/>
          <div className='comment'>The <span className="bold-list">code</span> written to display the interests in the forum.</div>
          <br/>
          After writing out the schema, I used <span className="bold-list">AutoForum, SelectField, and SubmitField</span> to make the forum to select the different interests.
          After that, similar to Task 3 Segment, I used <span className="bold-list">Markdown</span> to display the description cleanly.
          <Image src={'https://github.com/saitoshi/images/blob/main/radgradtask/task5/RadGrad5.gif?raw=true'} size='big' centered/>
          <div className='comment'>The sample rundown of the Task 5 interest description function.</div>
          <b><u>Task 6 - Editing Description</u></b><br/>
          For this task, we were asked to create something similar to Task 5 but the difference is that it also has the ability to "Edit the Description". To start on this task, I took a look at my previous code that I created in the past to rekindle my memory on how to do so.
          After that, I took a look at the RadGrad GitHub to see what is "RadGrad's Rule of Thumb" on setting up similar code. Following the hints listed by Professor Johnson,
          I created two components that stored two different components: one with the interest dropdown and one with the interest description update function.
          <br/>
          The first component was not as hard to do as it was similar to Task 5. The challenging part of this task was creating the description updates for me.
          After reviewing some code and taking in between breaks, I was able to display the forms necessary for the updates.
          <Image src={'https://github.com/saitoshi/images/blob/main/radgradtask/task6/task6.png?raw=true'} size='big' centered/>
          <div className='comment'><span className="bold-list">How Task 6 displays when I login as myself.</span></div>
          <br/>
          <b><u>Task 7- Creating Tabs and Modals</u></b><br/>
          The final task was not as hard compared to Task 6. To begin this task I began by making a general structure of the tabs.
          Then after consulting with Professor Moore over Discord, I decided to add top 3 favorites of the previous tasks to place in the tabs.
          <Image src={'https://github.com/saitoshi/images/blob/main/radgradtask/task7/task7bar.png?raw=true'} size='big' centered/>
          <div className='comment'><span className="bold-list">The three tabs are from Task 2, 3, and 5.</span></div>
          Since Task 5, the description of the interests was a big size compared to other two, I chose this task to be the modal.
          I created the three tabs as a list and then used the Tab from Semantic UI React and created three tab headers using the <span className="bold-list"><code>RadGradTabHeader</code></span>.
          The tab making was the easiest but I personally struggled with making the modals because I did not have prior experience in either 314 or 414.
          My initial thought was that it was going to be similar to "pop-ups", but after taking to Professor Moore I found it was a little different. Therefore, I took a look at the codes
          he <a href="https://github.com/radgrad/radgrad2/blob/adef8036b09a0c6e0f998fd91856c1cea081a512/app/imports/ui/components/shared/manage/career-goal/EditCareerGoalButton.tsx">recommended</a>.
          After looking at it I followed the steps and created the modal for Task 5's tab where the user would click the button and then the modal would appear.
          <Image src='https://github.com/saitoshi/images/blob/main/radgradtask/task7/RadGradTask7.gif?raw=true' size='big' centered/>
          <div className='comment'><span className="bold-list">A sample visual of how the Tabs and Modals work.</span></div>
        </Container>
        <div className ="push"/>
      </Container>
);
}

export default RadGradStart;
