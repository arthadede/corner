import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import BoxBordered from '../../../../../components/BoxBordered';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 600
  },
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  }
}));

const FormCategory = props => {
  const classes = useStyles();

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>New Category</span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Name" variant="outlined" required fullWidth />
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
            SAVE
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

FormCategory.propTypes = {};

export default FormCategory;
