import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect} from "react-redux";
import LinearProgress  from "@material-ui/core/LinearProgress";
import EmployeeDirectory from '../containers/EmployeeDirectory';



class App extends Component {
  render() {
    return (
      <div>
        {this.props.fetchCount > 0 && <LinearProgress />}
        <p>Zach</p>
        <EmployeeDirectory/>
      </div>
    )
  }
}
App.propTypes = {
  fetchCount: PropTypes.number
};

const mapStateToProps = state => {
  return {
    fetchCount: state.fetchCount
  }
};


export default connect(mapStateToProps)(App)
