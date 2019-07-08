import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ...

class People extends Component {
  static propTypes = {
    // ...
  };

  getPeopleDisplay() {
    return <>{this.people.map(person => (
      <div className="App-box" key={person.id}>{person.name}</div>
    ))}</>;
  }

  render() {
    return <div>{this.getPeopleDisplay}</div>;
  }
}

const mapStateToProps = ({people}) => ({
  people
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // ...
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People);
