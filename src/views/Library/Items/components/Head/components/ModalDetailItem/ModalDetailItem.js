import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import BoxBordered from '../../../../../../../components/BoxBordered';
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

const ModalDetailItem = props => {
  const classes = useStyles();

  return (
    <BoxBordered className={classes.root}>
      <Box py={3} px={4}>
        <span className={classes.headerText}>New Item</span>
      </Box>
      <Divider />
      <form action="">
        <Box py={3} px={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="SKU" variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Item name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select native input={<OutlinedInput />}>
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Pricing</FormLabel>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="Alert stock"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Customer</FormLabel>
                <TextField
                  placeholder="Price"
                  variant="outlined"
                  required
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Point</FormLabel>
                <TextField
                  placeholder="Price"
                  variant="outlined"
                  required
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Manage Stock</FormLabel>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="Alert stock"
                />
                <TextField
                  placeholder="Price"
                  variant="outlined"
                  required
                  fullWidth
                />
              </FormControl>
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
            SAVE ITEM
          </Button>
        </Box>
      </form>
    </BoxBordered>
  );
};

ModalDetailItem.propTypes = {};

export default ModalDetailItem;
