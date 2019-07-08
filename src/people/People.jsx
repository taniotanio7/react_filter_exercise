import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

export default connect(
  mapStateToProps
)(People);
