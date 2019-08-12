import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import BoxBordered from '../../../../components/BoxBordered';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  boxHeaderTitle: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  boxHeaderSubtitle: {
    display: 'inline-flex',
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  }
}));

const FormChangePassword = props => {
  const classes = useStyles();

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.boxHeaderTitle}>Profile</span>
        <span className={classes.boxHeaderSubtitle}>
          The information can be edited
        </span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container spacing={2}>
            <Grid item lg={6} xs={12}>
              <TextField
                label="First name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                label="Last name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField label="Email" variant="outlined" required fullWidth />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                label="Phone number"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          py={3}
          px={4}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Button color="primary" variant="contained">
            SAVE PROFILES
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

FormChangePassword.propTypes = {};

export default FormChangePassword;
