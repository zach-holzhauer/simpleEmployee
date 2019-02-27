import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class EmployeeCard extends Component {
  render() {
    const {
      employee
    } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography variant="h3" color="textPrimary" >
            {employee.lastName}, {employee.firstName}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    department: PropTypes.number
  }).isRequired
};

export default EmployeeCard
