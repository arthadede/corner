import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AntSwitch from '../../../../components/AntSwitch';
import SearchInput from '../../../../components/SearchInput';
import BoxBordered from '../../../../components/BoxBordered';
import FormControlSwitch from '../../../../components/FormControlSwitch';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '&>*:not(:last-child)': {
        marginBottom: 24
      }
    }
  },
  modalWrapper: {
    width: 600
  },
  boxHeaderTitle: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  boxHeaderSubtitle: {},
  inputSearch: {
    flexGrow: 1
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const TableActions = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <div className={classes.inputSearch}>
        <SearchInput placeholder="Search" />
      </div>
      <div>
        <Button color="primary" variant="contained" onClick={handleOpen}>
          CREATE OUTLET
        </Button>
        <Modal open={open} onClose={handleClose} className={classes.modal}>
          <BoxBordered className={classes.modalWrapper}>
            <Box py={3} px={4}>
              <span className={classes.boxHeaderTitle}>New Outlet</span>
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
        </Modal>
      </div>
    </div>
  );
};

TableActions.propTypes = {};

export default TableActions;
