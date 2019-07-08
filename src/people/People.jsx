import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ...

class People extends Component {
  static propTypes = {
    people: PropTypes.array
  };

  getPeopleList = () => this.props.people.map(
    person => (
      <div className="App-box" key={person.id}>
        {person.name}
      </div>
    )
  )

  render() {
    const peopleList = this.getPeopleList()
    return <div>{peopleList}</div>;
  }
}

const mapStateToProps = ({people}) => ({
  people: people.people
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // ...
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People);
