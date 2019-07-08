import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ...

class People extends Component {
  static propTypes = {
    people: PropTypes.array,
    filterQuery: PropTypes.string
  };

  getPeopleList = () => {
    let filterPeople = () => true;

    if (this.props.filterQuery !== '') {
      filterPeople = ({name}) => name.toLowerCase().includes(this.props.filterQuery.toLowerCase());
    }

    return this.props.people.filter(filterPeople).map(
      person => (
        <div className="App-box" key={person.id}>
          {person.name}
        </div>
      )
    )
  }

  render() {
    const peopleList = this.getPeopleList()
    return <div>{peopleList}</div>;
  }
}

const mapStateToProps = ({people}) => ({
  people: people.people,
  filterQuery: people.filterQuery
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
