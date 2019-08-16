import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SearchInput from '../../../../components/SearchInput';
import { ModalCreate } from './components';
import { makeStyles } from '@material-ui/core';

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
  search: {
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
      <div className={classes.search}>
        <SearchInput placeholder="Search" />
      </div>
      <div>
        <Button color="primary" variant="contained" onClick={handleOpen}>
          CREATE OUTLET
        </Button>
        <Modal open={open} onClose={handleClose} className={classes.modal}>
          <ModalCreate />
        </Modal>
      </div>
    </div>
  );
};

TableActions.propTypes = {};

export default TableActions;
