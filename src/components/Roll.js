import React, { PropTypes } from 'react'

const Roll = React.createClass({
  render: function() {
    let {values, successes} = this.props;
    return (
      <li ref={(ref) => this._li = ref}>
        <div>{values.map(value => <span className={'dice dice-' + value} />)}</div>
        <div>{successes} Successes</div>
      </li>
    );
  },

  componentDidMount: function() {
    this._li.scrollIntoView({block: "end", behavior: "smooth"});
  },

  propTypes: {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }
});

export default Roll
