import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AntSwitch from '../../../../../components/AntSwitch';
import BoxBordered from '../../../../../components/BoxBordered';
import FormControlSwitch from '../../../../../components/FormControlSwitch';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  }
}));

const FormNotification = props => {
  const classes = useStyles();

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Email Notification Settings</span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <FormControlSwitch
                control={
                  <AntSwitch
                    // checked={true}
                    // onChange={handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Daily Sales Summary"
                bordered={false}
                reversed
              />
            </Grid>
            <Grid item>
              <FormControlSwitch
                control={
                  <AntSwitch
                    // checked={true}
                    // onChange={handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Inventory Alerts"
                bordered={false}
                reversed
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
            SAVE SETTINGS
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

FormNotification.propTypes = {};

export default FormNotification;
