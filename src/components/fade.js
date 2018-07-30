import React from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

let descriptor = "We will produce your new application to \
your specification whatever your requirements, using up to the minute \
techniques and procedures";

export class Fade extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHovered: false,
    }
    this.onToggleHover = this.onToggleHover.bind(this);
  }
  onToggleHover() {
    this.setState((currentState) => {
      return {
      isHovered: !currentState.isHovered,
      }
    })
  }

  render() {
    return (
      <div key="hover" onMouseEnter={this.onToggleHover}
        onMouseLeave={this.onToggleHover}>
        {this.state.isHovered &&
          <span>{descriptor}</span>}
        <img src="http://via.placeholder.com/350x150"/>
      </div>


      )
    }
  }
