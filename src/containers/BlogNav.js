import React from 'react';

export default class BlogNav extends React.Component {
  render() {
    return (
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            {/*-- Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="/">MoovaShaka Home</a>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            </div>
            {/* /.navbar-collapse */}
        </div>
        {/* /.container-fluid */}
        </nav>
    )
  }
}
