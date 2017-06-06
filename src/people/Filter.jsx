import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ...

class Filter extends Component {
  static propTypes = {
    // ...
  };

  // ...

  render() {
    return (
      <div className='App-box'>
        {/* ... */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // ...
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // ...
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
