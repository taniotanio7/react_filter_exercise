import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateFilterQuery} from '../actions/people'

class Filter extends Component {
  static propTypes = {
    updateFilterQuery: PropTypes.func,
    filterQuery: PropTypes.string
  };

  saveInputOnChange = (event) => {
    this.props.updateFilterQuery(event.target.value);
  }

  render() {
    return (
      <div className='App-box'>
        <input onChange={this.saveInputOnChange}></input>
      </div>
    );
  }
}

const mapStateToProps = ({filterQuery}) => ({
  filterQuery
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateFilterQuery
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
