import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ...

class People extends Component {
  static propTypes = {
    // ...
  };

  // ...

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(People);
