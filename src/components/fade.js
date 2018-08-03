import React from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import Blogimg from './img/blog.png'

let desc = "We will produce your new application to \
your specification whatever your requirements, using up to the minute \
techniques and procedures";

let image={Blogimg}

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
          <span>{desc}</span>}
        <img src={image} />
      </div>


      )
    }
  }
