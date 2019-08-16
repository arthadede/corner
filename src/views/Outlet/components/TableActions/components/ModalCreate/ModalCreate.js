import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AntSwitch from '../../../../../../components/AntSwitch';
import BoxBordered from '../../../../../../components/BoxBordered';
import FormControlSwitch from '../../../../../../components/FormControlSwitch';
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

const ModalCreate = props => {
  const classes = useStyles();

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>New Outlet</span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Outlet name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone number"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>City</InputLabel>
                <Select native input={<OutlinedInput />}>
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Province</InputLabel>
                <Select native input={<OutlinedInput />}>
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlSwitch
                control={
                  <AntSwitch
                    // checked={true}
                    // onChange={handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Status"
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
            SAVE OUTLET
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

ModalCreate.propTypes = {};

export default ModalCreate;
