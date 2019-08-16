import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import BoxBordered from '../../../../../components/BoxBordered';
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

const FormReceipt = props => {
  const classes = useStyles();

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.boxHeaderTitle}>Receipt Information</span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Outlet Info"
                type="text"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                type="text"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
              <TextField
                label="Zip code"
                type="text"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone number"
                type="text"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Note"
                type="text"
                variant="outlined"
                rows="5"
                rowsMax="5"
                required
                multiline
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
          flexDirection="row"
          alignItems="flex-start"
        >
          <Button color="primary" variant="contained">
            SAVE FORMAT
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

FormReceipt.propTypes = {};

export default FormReceipt;
