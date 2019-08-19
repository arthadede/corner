import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SearchInput from '../../../../../components/SearchInput';
import { makeStyles } from '@material-ui/styles';
import { CreateSupplier } from './components';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginLeft: 8,
    marginRight: 8
  }
}));

const Header = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container alignItems="center" spacing={3}>
        <Grid item md={4} xs={12}>
          <SearchInput placeholder="Search" />
        </Grid>
        <Grid item md={8} xs={12} align="right">
          <Button
            color="primary"
            variant="outlined"
            className={classes.button}
            onClick={() => console.log('EXPORT')}
          >
            EXPORT CSV
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => handleOpen()}
          >
            CREATE SUPPLIER
          </Button>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <CreateSupplier />
      </Modal>
    </div>
  );
};

Header.propTypes = {};

export default Header;
