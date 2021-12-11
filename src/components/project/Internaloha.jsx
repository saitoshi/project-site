import React from "react";
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Internaloha() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">Internaloha 2.0</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> <b> Software Engineering, TypeScript, Scrapers </b> <br/></p>
        </Grid>
        <Grid textAlign="center">
          <p><span className="bold-list"> 2021-12-10</span> </p>
        </Grid>
        <br/>
        <Container text>
          <hr/>
          For my Capstone Project course (<a href ="https://manoa.hawaii.edu/catalog/courses/ics-496-capstone-project-3/">ICS 496</a>) I have teamed up with Professor Johnson with the development of Internaloha Scrappers.
          <ul>
            <li>Group Organization: <a href = "https://internaloha.github.io/documentation/">LINK</a></li>
            <li>GitHub Repository: <a href ="https://github.com/internaloha/scrapers">LINK</a></li>
          </ul>
          <b><u>Overview of Internaloha</u></b><br/>
          Initially, University of Hawaii Computer Science undergraduates were able to find internships through the previous version internship page of RadGrad. However, since this version needed each internship to be manually entered. In order to spread internship awareness efficiently, Internaloha was created.
          Internaloha is an automated scraper system of collecting internships from a variety of job searching websites and having them displayed on the RadGrad internship explorer page. Version 1 uses Javascript and the tool Puppeteer. A node.js library which uses Chromium dev tool, Puppeteer runs headless on default. Each scraper goes to a page and then manually searches through the site for internships. Eventually data is stored inside a JSON file. Finally, the data on the JSON file is manually transferred to RadGrad’s internship explorer page.
          <Image src={"https://github.com/saitoshi/images/blob/main/internaloha/radgrad.png?raw=true"} size='large' centered/>
          <div className="comment"> A sample internship explorer on the RadGrad application.</div>
          <br/>
          <b><u>Purpose</u></b><br/>
          The main purpose of this project was to update the previous scrappers by using TypeScript and a common format. Previously, the scrappers were written by a different group of students where the basic format was not necessarily uniform.
          For the Fall 2021, our main goal was to update is using classes and making it more unified within the different scrappers. <br/>
          Using the <a href ="https://github.com/internaloha/scrapers/projects/1">Project Board</a> function from GitHub, each student worked on a certain issue regarding to the scrappers.
          <br/>
          <b><u>Contribution to Internaloha Version 2</u></b>
          <br />
          Below are the different scrappers and a brief summary associated to it. <br />
          <b><a href="https://github.com/internaloha/scrapers/blob/main/scrapers/Scraper.ziprecruiter.ts">ZipRecruiter Scrapper</a></b><br />
          ZipRecruiter, was the first scraper I wrote with the new format. Initially, my process was to translate the code written in version 1 of the same ZipRecruiter and then run it. However, after the first trial I noticed that that was
          not an option.
          To begin with, the HTML code that was written in version 1 did not match the current ZipRecruiter set up. Furthermore, there was a for loop within the code that did not make any sense as iterated within the same item five times.
          <br />
          Compared to the other scrapers, writing ZipRecruiter took a longer time to write. Furthermore, the difficulty here was having the scraper keep scrolling through the page until there are no available jobs. With the new format,
          ZipRecruiter was written using 48 lines of code where version 1 of the same website required 130 lines of code.
          <br />
          <Image className="ui centered big image" src="https://github.com/saitoshi/images/blob/main/internaloha/zipcomp.png?raw=true"/>
            <div className="comment">
              A screenshot of the code of Version 1 (on left) and Version 2 (on right) of Zip Recruiter Scraper.
            </div>
          <br/>
            Overall, working on ZipRecruiter scraper provided a basic understanding on creating scrapers on the new format.
            <br/>
          <b><a href = "https://github.com/internaloha/scrapers/blob/main/scrapers/Scraper.monster.ts">Monster Scrapper</a></b><br/>
          For the second scraper, I wrote a scraper for Monster. The challenging part of Monster was to have it iterate it through multiple pages through a tab. Monster was similar to ZipRecruiter where the as long as there are information, the page can keep scrolling down through the list of internships. Unlike ZipRecruiter or other job websites, there was no div section name to create a while loop for. However, when looking at the source code using Google Chrome, there existed a div button where it stored the next section of listings. Thus, the scraper will keep extracting URL as long as the button exists.
          <br/>
          <code>
            {"//while next link exists\n" +
            "while (await super.selectorExists(nextLink)) {\n" +
            "await this.page.click(nextPage);"
            }
          </code>
          <div className="comment">
            <br />
            The code written to where the code inside the while loop operates as long as the nextLink button exists.
          </div>
          <br/>
          Furthermore, the Monster page is set up where all of the necessary information is spread out. Thus, the scraper collects the URL, position title, and company name from the main page. Then, the scraper goes to the individual URL of that specific position title and extracts the description of the job and the job location. While the job location was written in the main page, it was simpler to extract it from the individual position page for an easier to readable code.
          <br/>
          <b><a href="https://github.com/internaloha/scrapers/blob/main/scrapers/Scraper.glassdoor.ts">GlassDoor Scrapper</a></b><br/>
          This was the third scrapper I have worked on. <br/>
          In the original scrapper GlassDoor took one to two hours to scrape all the necessary information. After writing two scrappers writing the scrapers itself did not
          take a long time compared to the previous two. However, unlike the two scrapers, the scraper only took the url from the main page and rest of the necessary information (position title, company, description, etc.)
          was scrapped from going to that certain URL. <br/>
          Furthermore, since the GlassDoor scrapper has multiple pages depending on the week, I created a for loop by scrapping the number of pages.
          <br/>
          <code>
            {"// retrieve the total number of pages\n" +
            "let key = await super.getValue('div[class=\"cell middle d-none d-md-block py-sm\"]', 'innerText');\n" +
            "key = key.split(' ');\n" +
            "// get the highest amount of pages\n" +
            "let numberOfPages = key[3];\n" +
            "// for each j starting from 2 iterate the number of available pages of internship\n" +
            "for (let j = 2; j < numberOfPages+1; j++) "}
          </code>
          <div className="comment">
            <br />
            The code written to extract the number of pages available to loop through.
          </div>
          <br/>
          <b><a href ="https://github.com/internaloha/scrapers/blob/403de67709b04523503e6cb516c8555ef3dbdb73/scrapers/Scraper.stackoverflow.ts">StackOverFlow Scrapper</a></b><br/>
          This was the fourth scrapper I have worked on. <br/>
          Initially, the pattern was similar to others so writing it initially was not bad. However, after doing a test scrape I noticed that the total jobs scrapped were greater than the amount of internships available.
          I noticed that the scrapper scraped the recommended jobs. Therefore, to avoid this I extracted the number of internships listed on the page and then did the for loop based on that instead of the urls.length.
          <br/>
          <code>
            {"// extract the number of internships currently available\n" +
          "const key = await super.getValue('span[class=\"description fc-light fs-body1\"]', 'innerText');\n" +
          "const jobNumber = key.match(/\\d+/gm);\n" +
          "this.log.debug(`Amount of internships available: \\n${jobNumber[0]}`);\n" +
          "for (let i = 0; i < jobNumber ; i++)"}
          </code>
          <div className="comment">
            <br />
            The code written to extract the number of internships.
          </div>
          <br/>
          <b><u>Essay and Video</u></b><br/>
        As a requirement for ICS 496, the last week was spent on creating a poster, a report, and a video presentation of Internaloha. While the video and poster was created as a team, the paper itself was done individually.
        The essay was written using LaTex and is uploaded <a href ="https://csdl.ics.hawaii.edu/techreports/2021/21-02/21-02.pdf">here</a>.<br/>
          <Image className="ui centered big image" src="https://www.radgrad.org/img/fall-2021/internaloha-fall-2021.png"/>
          <br />
          <div className="comment">
            The presentation created describing the process of revamping Internaloha.
            <iframe width="420" height="345" src="https://www.youtube.com/embed/U2Rmrr2908M"></iframe>
            <br />
            The video describing what was done to revamp Internaloha.
          </div>
          <b><u>Results from Participation</u></b><br/>
          Working on Internaloha gave me an eye-opener to scrapers and the legal aspect of software engineering. However, I think the most important thing I gained from participating is how code should be written. One of the personal issues I had with version 1 is that majority of the scraper code was hard to comprehend and digest. While it is true that they still scraped the different websites, this might lead to an issue in the future when the website is updated or changes its format. This was the case for ZipRecruiter. Thus, it motivated me to check the code twice for any improvements or add comments to any code that might look weird.<br/>
          Furthermore, while the online setting was not a challenge as this is my third semester doing a group project online, it did allow me to reflect on how to work more effectively.
          For example, since most of the discussions were held through Discord, I made it a habit to add an emoji reply on the message to notify that I have read the message. Overall, I think participating in this group allowed me to continue the skills I have gained from RadGrad2 but a different angle.
        </Container>
        <div className ="push"/>
      </Container>


  );
}

export default Internaloha;
