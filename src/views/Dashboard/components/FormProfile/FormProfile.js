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
  }
}));

const FormProfile = props => {
  const classes = useStyles();

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.boxHeaderTitle}>Change Password</span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Old password"
                type="password"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="New password"
                type="password"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Confirm password"
                type="password"
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
            CHANGE PASSWORD
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

FormProfile.propTypes = {};

export default FormProfile;
