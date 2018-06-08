import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
     <div className="text-center">
      <hr />
         <p>&copy;MoovaShaka {(new Date().getFullYear())}</p>
      <hr />
    </div>
    )
  }
}
