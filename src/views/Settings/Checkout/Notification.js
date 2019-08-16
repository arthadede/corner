import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { FormNotification, FormRecipientEmail } from './components';

const Notification = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xl={4} md={6} xs={12}>
        <FormNotification />
      </Grid>
      <Grid item xl={8} md={6} xs={12}>
        <FormRecipientEmail />
      </Grid>
    </Grid>
  );
};

Notification.propTypes = {};

export default Notification;
