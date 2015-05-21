import React, { Component } from 'react';
import Deck from './components/Deck';
import Slide from './components/Slide';
import slides from './slides/index';
import './normalize.less';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
    case 37:
      this.setState({
        currentSlide: Math.max(0, this.state.currentSlide - 1)
      });
      break;
    case 39:
      this.setState({
        currentSlide: Math.min(this.state.currentSlide + 1, slides.length - 1)
      });
      break;
    }
  }

  render() {
    const { currentSlide } = this.state;
    return (
      <div>
        <Deck currentSlide={currentSlide}>
          {this.renderSlides()}
        </Deck>
      </div>
    );
  }

  renderSlides() {
    return slides.map((content, index) =>
      <Slide key={index}>{content}</Slide>
    );
  }
}
