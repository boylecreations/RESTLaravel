import React from 'react';

export default class CallToAction extends React.Component {
  render() {
    return (
      <div className="call-to-action">
        This is the Call to Action
        <h1>{this.props.title}</h1>
        <p>{this.props.link}</p>
      </div>
    );
  }
}
