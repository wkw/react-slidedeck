import React from 'react';
import './Slide.less';

export default class Slide {
  render() {
    return (
      <div className='Slide'>
        {this.props.children}
      </div>
    );
  }
}
