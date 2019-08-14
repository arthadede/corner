import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { CardProfile, FormProfile, FormChangePassword } from './components';

const Account = props => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} xs={12}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <CardProfile data={props.profile} />
          </Grid>
          <Grid item>
            <FormChangePassword />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={8} md={6} xs={12}>
        <FormProfile data={props.profileForm} />
      </Grid>
    </Grid>
  );
};

Account.displayName = 'AccountSettings';
Account.propTypes = {
  profile: PropTypes.object.isRequired,
  profileForm: PropTypes.object.isRequired
};

export default Account;
