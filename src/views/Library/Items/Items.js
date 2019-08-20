import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { Head, Body } from './components';

const Items = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Head />
      </Grid>
      <Grid item xs={12}>
        <Body />
      </Grid>
    </Grid>
  )
}

Items.propTypes = {

}

export default Items
