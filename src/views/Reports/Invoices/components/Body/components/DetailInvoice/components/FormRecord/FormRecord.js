import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import BoxBordered from '../../../../../../../../../components/BoxBordered';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 920
  },
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  button: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0
    }
  }
}));

const FormRecord = props => {
  const classes = useStyles();

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Create Record</span>
      </Box>
      <Divider />
      <Box py={3} px={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Date Picker"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Amount Received"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Payment Type"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              multiline
              fullWidth
              rows="5"
              variant="outlined"
              label="Notes"
            />
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box py={3} px={4}>
        <Button variant="contained" color="primary" className={classes.button}>
          Save Record
        </Button>
        <Button variant="contained" color="danger" onClick={props.onClose} className={classes.button}>
          Cancel
        </Button>
      </Box>
    </BoxBordered>
  );
};

FormRecord.propTypes = {};

export default FormRecord;
