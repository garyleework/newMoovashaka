import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: [
        { id:1, popup: 'You can send your design in whichever format suits you best: PDF, Sketch, Word, PSD etc.' },
        { id:2, popup: 'We will code your design using state-of-the-art techniques' },
        { id:3, popup: 'Your finished website is ready to host on whichever platform you use, bug fixes and minor alterations are on us. Speak to us for a detailed quote.'}
      ],
    }
  }
  getDefaultStyles() {
  return this.state.popup.map((popup) => {
    return {
      style: { height: 0, opacity: 0 },
      data: popup,
      key: popup.id + 'key'
    }
  })
}
getStyles(){
  return this.state.popup.map((popup)=>{
    return {
      style:{height:spring(100, {stiffness:100, dampening:50}), opacity:spring(1)},
      data:popup,
      key:popup.id+'key'
    }
  })
}

willEnter(){
  return {height:0, opacity:0}
}

willLeave(){
  return {height:spring(0), opacity:spring(0)}
}

listAll(){
  return (
    <TransitionMotion
      defaultStyles={this.getDefaultStyles()}
      styles={this.getStyles()}
      willEnter={this.willEnter}
      willLeave={this.willLeave}
      >
      {
        currentStyles => (
          <div className="List">
            {currentStyles.map((e)=>{
            return (
                <div key={e.key} style={e.style} className="motionItem">
                  {e.data.popup}
                </div>
              )
            })}
          </div>
        )
}
</TransitionMotion>
  )
}
render(){
  return (
    <div>
      <span>{this.listAll()}</span>
    </div>
  )
}
}
export default List;
