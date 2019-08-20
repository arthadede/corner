import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SearchInput from '../../../../../components/SearchInput';
import { ModalDetailItem } from './components';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0
    }
  }
}));

const TableActions = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item md={4} xs={12}>
        <SearchInput placeholder="Search" />
      </Grid>
      <Grid item md={8} xs={12} align="right">
        <Button color="primary" variant="outlined" className={classes.button}>
          EXPORT CSV
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpen}
          className={classes.button}
        >
          CREATE ITEM
        </Button>
      </Grid>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <ModalDetailItem />
      </Modal>
    </Grid>
  );
};

TableActions.propTypes = {};

export default TableActions;
