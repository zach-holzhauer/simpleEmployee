import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect} from "react-redux";
import {
  List,
  ListItem,
  Avatar,
  IconButton
} from '@material-ui/core/index';
import {
  Work,
  Check
} from "@material-ui/icons"
import {
  withStyles
} from "@material-ui/core/styles";

import EmployeeCard from '../components/EmployeeCard';
import actions from '../actions/';

const styles = {
  avatar: {
    margin: 10,
  },
  selectedAvatar: {
    margin: 10,
    backgroundColor: '#005a00',
  },
  unselectedAvatar: {
    margin: 10,
    backgroundColor: '#d3d3d3',
  },
  whiteText: {
    color: '#ffffff'
  },
  blackText: {
    color:'#000000'
  }

};

class EmployeeDirectory extends Component {

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const {
      employees,
      selectedEmployee,
      departments,
      setEmployee,
      classes
    } = this.props;
    let deptName = '';
    if(selectedEmployee && departments.length > 0){
      deptName = departments.find(dept => dept.id === selectedEmployee.department);
      if (deptName === undefined){
        deptName = ''
      } else {
        deptName = deptName.name;
      }
    }


    return (
      <div className={{display: 'flex', justifyContent: 'flex-start'}}>
        <List>
          {employees.map(employee => {
            const selected = selectedEmployee && (selectedEmployee.id === employee.id);
            const avatarBgColor = selected ? classes.selectedAvatar: classes.unselectedAvatar;
            return (
            <ListItem key={employee.id}>
              <Avatar className={avatarBgColor}>
              <IconButton
                onClick={() => {
                  setEmployee(employee)
                }}
                className={selected ? classes.whiteText : classes.blackText}
              >
                {selected && <Check/>}
                {!selected && <Work/>}
              </IconButton>
              </Avatar>
                <EmployeeCard employee={employee}/>
            </ListItem>
          )})}
        </List>
        <div>
          <p>
            {deptName}
          </p>
        </div>
      </div>
    )
  }
}
EmployeeDirectory.propTypes = {
  employees: PropTypes.array,
  employee: PropTypes.object,
  departments: PropTypes.array,
  setEmployee: PropTypes.func,
  fetchEmployees: PropTypes.func,
  selectedEmployee: PropTypes.object
};

const mapStateToProps = state => {
  return {
    employees: state.employees,
    departments: state.departments,
    selectedEmployee: state.selectedEmployee
  }
};
const mapDispatchToProps = dispatch => {
  return {
    setEmployee: employee => {
      dispatch(actions.employeeActions.setEmployee(employee))
    },
    fetchEmployees: () => {
      dispatch(actions.employeeActions.fetchEmployeesAction())
    }
  }
};


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(EmployeeDirectory))
