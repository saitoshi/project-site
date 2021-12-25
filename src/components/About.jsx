import React from "react";
import { Header, Container, Grid, Image, Button, Icon } from 'semantic-ui-react';

function About() {
  const pageStyle = {
    paddingLeft: '10em',
    paddingTop: '1em',
  };
  return (
      <Container style={pageStyle}>
        <Header as = 'h2' textAlign='center'>自己紹介</Header>
        <hr/>
        <br/>
        <Container text>
          <Grid columns={2} divided>
            <Grid.Column textAlign="center">
            <Image src="https://github.com/saitoshi/images/blob/main/about.jpg?raw=true" centered size='large' circular/>
            <Header as = 'h3' textAlign = 'center'>SHIN SAITO</Header>
            <Button.Group centered>
            <Button color='twitter' size='medium' href="https://twitter.com/iseyadj45">
                <Icon name='twitter'/>
            </Button>
            <Button color='red' size='medium' href="mailto:saitoshi2145@gmail.com">
              <Icon name='envelope'/> 
            </Button>
            <Button color='github' size='small' href="https://github.com/saitoshi">
              <Icon name='github'/>
            </Button>
          </Button.Group>
            </Grid.Column>
            <Grid.Column>
              <ul>
                <li>TOEIC： 975点</li>
                <li>JLPT: N1 N2</li>
                <li>ハワイ大学マノア校<br/>
                数学とコンピューターサイエンスダブル専攻</li>
              </ul>
              <Header as = 'h3' textAlign = 'center'>趣味</Header>
              <ul>
                <li>ソフトウェアエンジニア</li>
                <li>日英通訳・翻訳</li>
                <li>データーサイエンス</li>
                <li>イラスト・デザイン</li>
              </ul>
              <Header as = 'h3' textAlign = 'center'>スキル</Header>
              <ul>
              <li><b>主な言語とフレームワーク</b><br/>
                  JavaScript, Python, C, HTML, CSS, Semantic UI
                </li>
                <li><b>基本使用のツールとOS</b><br/>
                MacOS, Git/GitHub, Windows, Intellij IDEA, Visual Studio Code
                </li>
              </ul>
            </Grid.Column>
          </Grid>
          <Header as = 'h3' textAlign = 'center'>業務履歴</Header>
          <hr/>
          <ul>
          <li><b>リサーチアシスタント・Collaborative Software Development Laboratory</b><br/>
          21年8月～21年12月 <br/>
          インターアロハと言う学生向けインターン探しアルバイトアプリの開発チームでVersion 2のプログラムやコードを作成。
          </li>
          <li><b>Mathematics Learning Assistant・ハワイ大学マノア校</b><br/>
          19年1月～21年12月<br/>
          ハワイ大学マノア校で数学の授業をアシスタント講師として担当しました。
          </li>
          <li><b>Media and Event Assistant・ハワイ大学マノア校</b><br/>
            June 2020 to December 2021 <br/>
            Assisted the Better Tomorrow Speaker Series team by updating its website, social media, and providing the technical support for Zoom Webinars.
          </li>
          <li><b>Summer Research Assitant, RadGrad NSF Research Experience for Undergraduates program</b>
          <br/>
          21年5月～21年7月 <br/>
          RadGradと言う学生向けアプリのバージョン2の作成チームをインターンとして参加しました。
          </li>
          <li><b>リサーチアシスタント・ハワイ大学マノア校</b><br/>
          May 2020 to April 2021 <br/>
          データーアナリストとしてハワイのオアフ島とマウイ島の水利用のデーター管理を担当しました。 </li>
          <li><b>Tutor and Grader, University of Hawaii at Manoa, Mathematics Department</b><br/>
          August 2019 to December 2020 <br/>
            ハワイ大学マノア学校の学生用のアシスタントルームでチューターとしてアルバイトをしました・
          </li>
          <li><b>日英通訳士,・ハワイ大学マノア校旅行産業経営学部</b><br/>
          19年1月～20年2月<br/>
          ハワイ大学マノア校旅行産業経営学部で日本語から英語の通訳を担当。
          </li>
        </ul>
        </Container>
        <div className="push"/>
      </Container>
  );
}

export default About;
