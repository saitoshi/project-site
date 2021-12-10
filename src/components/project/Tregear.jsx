import React from "react";
import '../style.css';
import { Header, Container, Grid, Image } from 'semantic-ui-react';

function Tregear() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">Tregear Translation Story</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> Japanese, Translation</p>
          <br/>
        </Grid>
        <Container text>
          <hr/>
          <p>
            <b><u>OVERVIEW OF JPN 425</u></b>
            <br/>
            JPN 425 is a translation course centered around translating Japanese writing into English. Due to the impact of COVID-19, the class did a fianl project
            Each student was given an option to translate any thing they wanted and I selected to translate the <i>Tregear Story</i> written by NAKANO Takao. The story centers around one of the
            <span className="bold-list">Ultraman</span> series villain, Tregear as it goes through his back story on him becoming a villain.
            <br/>
            <br/>
            <Grid textAlign = "center">
              <i>The name “Tregear” in the seven spaces means “disaster”, “temptation”, and “contraindication“. This is the story when “he” was still an Ultraman at the Land of Light….
                Translated summary.</i>
            </Grid>
            <br/>
            <Image src={"https://images-na.ssl-images-amazon.com/images/I/616IbasANdL.jpg"} size='large' centered/>
            <div className="comment">Ultraman Taiga Fanbook, where Tregear Story was published in.</div>
            The translation process was done in the following:
            <ul>
              <li> Literal Translation</li>
              A literal translation from Japanese to English without thinking whether it would make
              sense for English speaking audience.
              <li> Modified Translation</li>
              A translation to see what phrases should be fixed in order to make it sound smooth and makes sense
              for English readers.
              <li> Final Draft</li>
              A last check of grammar and mistranslations to see whether the context of the original source is not lost in
              the translations.
            </ul>
            <ul>
              <li> For the <a href="TregearStoryFinalDraft.pdf">final copy</a> of the translation.</li>
              <li> For the translator's <a href="JPN425SaitoProjectNotes.pdf">notes</a> to see why somethings were translated in a such of way.</li>
            </ul>
          </p>
        </Container>
        <div className="push"/>
      </Container>
  );
}

export default Tregear;
