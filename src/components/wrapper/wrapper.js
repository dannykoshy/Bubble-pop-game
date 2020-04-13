import React, {Component} from 'react';
import './wrapper.scss'

import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Wrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      bubbles: [],
      gameStarted: false
    }
    this.bubbleInterval = null;
  };

  componentDidMount() {
    let bubbles = this.createBubbles();
    this.setState({
      bubbles: bubbles
    })
  };

  createBubbles = () => {
    let bubbles = [];
    for (var i = 0; i < 36; i++) {
      bubbles.push({ id: i, selected: false });
    };
    return bubbles;
  };

  onBubbleClick = (index) => {
    let score = this.state.score;
    if(this.state.gameStarted)
    if(this.state.bubbles[index].selected) {
      this.setState({score: score+1});
    }
    else {
      if(score !== 0) {
        this.setState({score: score-1});
      } else {
        alert("Game Over");
        this.onStopGame();
      };
    }
  };

  onStartGame = () => {
    if(!this.state.gameStarted) {
     this.bubbleInterval = setInterval(() => {
        let show = this.generateRandomBubble();
        let bubbles = this.autoSelectBubble(show);
        this.setState({bubbles,gameStarted: true})
      },1000)
    }
  };

  onStopGame = () => {
    if(this.state.gameStarted) {
      alert(`Your final score is ${this.state.score}`)
      clearInterval(this.bubbleInterval);
      let bubbles = this.resetBubbles()
      this.setState({
        bubbles,
        score: 0,
        gameStarted: false
      });
    }
  };

  autoSelectBubble = (show) => {
    return this.state.bubbles.map((bubble, index) => {
      if (show.id === index) {
        bubble.selected = true;
      }
      else {
        bubble.selected = false;
      }
      return bubble;
    });
  };

  generateRandomBubble = () => {
    const { bubbles } = this.state;
    let show = bubbles[Math.floor(Math.random() * bubbles.length)];
    return show;
  };

  resetBubbles = () => {
    return this.state.bubbles.map((bubble) => {
      bubble.selected = false;
      return bubble;
    });
  };

  render() {
    const { bubbles, score, gameStarted  } = this.state;
    return (
      <Container className="bubble-game-wrap">

        <Row className="score-wrap">
          <Col>
            <h4>Score: <span>{score}</span></h4>
            <p>{gameStarted? "Game in progress" : "Click play to start game"}</p>
          </Col>
        </Row>

        <Row className="bubble-wrap">
          {bubbles.map((bubble, index) => {
            return (
              <Col className="bubbles" key={index} xs={2}>
                <span className={bubble.selected? "selected" : ""} onClick={this.onBubbleClick.bind(this, index)}></span>
              </Col>
            )
          })}
        </Row>

        <Row className="buttons justify-content-md-center">
          <Col xs={3}><Button size="lg" variant="primary" onClick={this.onStartGame}>Play</Button></Col>
          <Col xs={3}><Button size="lg" variant="secondary" onClick={this.onStopGame}>Stop</Button></Col>
        </Row>
        
      </Container>
    );
  };
};