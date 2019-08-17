import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { Actions, TableCustomers } from './components';

const Customer = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Actions />
      </Grid>
      <Grid item xs={12}>
        <TableCustomers />
      </Grid>
    </Grid>
  )
}

Customer.propTypes = {

}

export default Customer
