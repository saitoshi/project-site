import React from "react";
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import '../style.css';

function RadGradReview() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">A Critical Review Of RadGrad</Header>
        <Grid textAlign = "center">
          <p>RadGrad2, Summer 2021 Internship Program, Software Engineering <br/>
            </p>
        </Grid>
        <Grid textAlign = "center">
          <p><span className="bold-list">May 19, 2021</span></p>
        </Grid>
        <Container text>
          <hr/>
          <p>
            As a University of Hawaii student, your best friend during your undergraduate career is probably going to be Star. Star allows you to register for courses, pay for your tuition, scholarship, and see your current academic standings. However, as a STEM, especially as an ICS student there are moments where you feel Star is not enough. Star does not provide internship details or in-depth recommended career paths. To support the many flaws, an ICS student has RadGrad. This application provides ICS students ways on how they can attain their career goals, a list of courses they should take, and many more. Additionally, it has a level and point system like Pokemon providing an incentive to do better. Despite the many strength, because of the “Ying and Yang” rule, there are some weaknesses that RadGrad struggles in.
            <Image src={"https://www.radgrad.org/assets/images/ice-example-b89aedaa1bd783119aca969f47745f02.png"} size='large' centered/>
            <div className="comment"> A screenshot of a page from RadGrad</div>
            <h4> Strength </h4>
            <ol>
              <li> <span class = "bold-list">Priority List System</span></li>
              The things that are necessary and not are organized neatly. Furthermore, within each card that needs action a simple explanation on how to fix is provided making it easier for user to fix or update.
              <li><span class ="bold-list"> Course Page</span> </li>
              The course page is automatically set up; therefore, users do not have to manually add courses one by one. However, students still have the ability to manually add courses based on their interests. Which is helpful to student to schedule out their future semesters more effectively than Star.
            </ol>
            <h4> Weakness </h4>
            Here are some of the following the current RadGrad system tends to be weak at.
            <ol>
              <li><span className="bold-list">Consistency</span></li>
              The current application lacks in the area of design consistency. For instance, within the  opportunities page the usage of bold font is inconsistent. For example, Amazon Web Service has its name bolded whereas Android or IOS does not. From a personal opinion, if one is bolded maybe, it is better to do so for the others.
              <Image src={"https://saitoshi.github.io/images/title.png"} size='medium' centered/>

              <div className="comment">Inconsistent formatting in titles.</div>
              <br/>
              Another example is that some buttons have auto-translations on despite everything else is in English. For instance, on the student review pages, the submit button for me is written in Japanese kanji rather than English. While making assumptions goes against my mathematical background, I assume that most of the RadGrad users will understand what submit is. Therefore, consistency should be applied to the language area too.
              <Image src={"https://saitoshi.github.io/images/submit.png"} size='medium' centered/>
              <div className="comment">Everything else but submit is in English.</div>
              <li><span className="bold-list">Filter or Search Function</span></li>
              As of right now, RadGrad has a good search function, but I still think it is not as user-friendly as it could be. For example, in the Interest Page, maybe the varieties listed could be filter based on the category of its interest. For instance, Java, C, or Python could be programming languages whereas others could be different. Additionally, something similar to this could be added to the Career Page also. Having a stronger search function makes users to condense their time spent on the app and they may explore other features available.
              <Image src={"https://saitoshi.github.io/images/filter.png"} size='large' centered/>
              <div className="comment">Add more ways to filter through the different choices.</div>
              <li><span className="bold-list">Student Planner</span></li>
              Currently, it is said that Student Planner should be a reflection on the registered information on Star. However, as of right now it contains ICS courses that I have no recollection of registering both on Star or RadGrad, The other case would be that I have registered to take a certain course next semester, but it is claiming that I a repeating a certain course. For instance, I am registered for ICS 313 in Fall 2021, but on RadGrad’s student planner it is listed that I took it in the Spring 2021 and will take it again in the Fall.
              <Image src={"https://saitoshi.github.io/images/duplicate.png"} size='large' centered/>
              <div className="comment">A duplicate ICS 313 and additional courses that I have not taken.</div>
              <li><span className="bold-list">Deletion Whiteout</span></li>
              When I deleted the internship from Student Planner, while it successfully deletes it from the page it whitens out the page. Even though page comes back after reloading it, I think this is an area that should be fixed for convinient usages.
              <Image src={"https://saitoshi.github.io/images/duplicate.png"} size='medium' centered/>
            </ol>
            <h4> Areas For Growth Opportunity </h4>
            Despite the strength and weakness listed above, there are many areas in which can be improved upon.
            <ol>
              <li><span className="bold-list"> Adding a Column For Class Environment</span></li>
              With the upcoming Fall 2021 semester, the school is gradually transitioning back to an in-person environment. However, that implies that there is going to be a mixture, of course, such as in-person, hybrid, and online. In addition, online even has its subcategory of synchronous and asynchronous courses. For instance, my ICS 321 course in Spring 2021 was online asynchronous but in Fall 2021, ICS 485 is scheduled to be in person or at least staggered.
              Furthermore, from personal experience, I was advised by Gerald Lau to take ICS 212 at Leeward Community College. Therefore, maybe when students are adding reviews another dropdown could be added to indicate the campus or if they took it at Manoa or not. That way prospective students can have a better idea on whether which campus they should take courses at.
              <Image src={"https://saitoshi.github.io/images/dropdown.png"} size='large' centered/>
              <div className="comment">Probably could add a dropdown of campus option between term and satisfaction.
              </div>
              <li><span className="bold-list">Separate Teaching and Tutoring</span></li>
              On the course planner page, Teaching and Tutoring are categorized as one of the same things. While this may sound more personal, I have a feeling that they are two different things. From a personal opinion, I see teaching covering one subject versus tutoring cover multiple subjects. Especially, with the Learning Assistant Program expanding, maybe it might be effective to separate the two into two bars. Furthermore, we might be able to add the growing Learning Assistant Program.
              <Image src={"https://saitoshi.github.io/images/tutor.png"} size='large' centered/>
              <div className="comment">A sample block of the Teaching or Tutoring block.</div>
              <li><span className="bold-list">Verification Process</span></li>
              It is better to believe in the goodness of people there are people who are rotten and will cheat out of a system. Maybe when students are typing for the verification process for an internship, there could be a box that asks for the supervisor’s email or contact information. That way the RadGrad staff can verify just to be safe.
              <Image src={"https://saitoshi.github.io/images/verification.png"} size='large' centered/>
              <li><span className="bold-list">Missing ICS courses</span></li>
              On the student planner and the courses list, there are few ICS courses that are missing that I have either taken or registered for. For instance, I am planning to take ICS 427 this Summer and ICS 496 Capstone Project on the Fall 2021. However, the selection of these two courses are nowhere to be found.
              <Image src={"https://saitoshi.github.io/images/427.png"} size='large' centered/>
              <div className="comment">The missing ICS 427 I am going to take for Summer 2021.</div>
            </ol>
            <br/>
            <h3>Benefits of Reviews</h3>
            Living in the era of "positive wokeness", people tend to not point out flaws in both people and objects. However, in a professional manner, I think it is neccessary to point out flaws. Having flaws means that there is opportunity for growth.
            For example, finding the area of errors that the current deployed RadGrad right now can grow the user happiness. Why? It is beause these errors are fixed before the general usage. When users are happy using the system, it means that the application is doing a good job. Therefore, pointing out the area of errors and improvement is a neccesary thing. Without it nothing can change.
            </p>
        </Container>
        <div className="push"/>
      </Container>


  );
}

export default RadGradReview;
