import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import CircularProgress from '@material-ui/core/CircularProgress';
import SendIcon from '@material-ui/icons/SendOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CachedIcon from '@material-ui/icons/CachedOutlined';
import BoxBordered from '../../../../../components/BoxBordered';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CustomizedIconButton from '../../../../../components/CustomizedIconButton';
import { makeStyles } from '@material-ui/styles';
import palette from '../../../../../theme/palette';

const useStyles = makeStyles(theme => ({
  headerText: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    ...theme.typography.h5
  },
  formAddedRecipient: {
    backgroundColor: '#F8FAFC',
    padding: '16px 42px',
    border: 'none'
  },
  formAddedRecipientInput: {
    width: '100%',
    border: 'none',
    background: 'initial',
    ...theme.typography.body1
  },
  formAddedRecipientBtn: {},
  buttonProgressWrapper: {
    position: 'relative',
    '&:not(last-child)': {
      marginRight: 8
    }
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  circleIcon: {
    color: palette.action.success
  },
  cachedIcon: {
    color: palette.action.warning
  }
}));

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const FormRecipientEmail = props => {
  const classes = useStyles();
  const inputEl = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState('');

  const handleOpen = async () => {
    await Promise.all([setOpen(true), timeout(500)]);
    inputEl.current.focus();
  };
  const handleClose = () => {
    setInput('');
    setOpen(false);
  };
  const handleSend = async () => {
    await Promise.all([setLoading(true), timeout(1000)]);
    setInput('');
    setOpen(false);
    setLoading(false);
  };

  return (
    <BoxBordered>
      <Box py={3} px={4}>
        <span className={classes.headerText}>Manage Recipient Email</span>
      </Box>
      <Divider />
      <Box py={3} px={4}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Tooltip title="Verified" aria-label="verified">
                <CheckCircleIcon className={classes.circleIcon} />
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="x1.artha@gmail.com" />
            <ListItemSecondaryAction>
              <CustomizedIconButton color="danger">
                <CloseIcon />
              </CustomizedIconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Tooltip title="Not Verified" aria-label="not-verified">
                <CachedIcon className={classes.cachedIcon} />
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="x2.artha@gmail.com" />
            <ListItemSecondaryAction>
              <CustomizedIconButton color="primary">
                <SendIcon />
              </CustomizedIconButton>
              <CustomizedIconButton color="danger">
                <CloseIcon />
              </CustomizedIconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Tooltip title="Not Verified" aria-label="not-verified">
                <CachedIcon className={classes.cachedIcon} />
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="x3.artha@gmail.com" />
            <ListItemSecondaryAction>
              <CustomizedIconButton color="primary">
                <SendIcon />
              </CustomizedIconButton>
              <CustomizedIconButton color="danger">
                <CloseIcon />
              </CustomizedIconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Collapse in={open}>
        <Paper className={classes.formAddedRecipient}>
          <input
            ref={inputEl}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className={classes.formAddedRecipientInput}
          />
        </Paper>
      </Collapse>
      <Divider />
      <Box
        py={3}
        px={4}
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
      >
        {!open && (
          <Button color="primary" variant="contained" onClick={handleOpen}>
            ADD EMAIL
          </Button>
        )}
        {open && (
          <>
            <div className={classes.buttonProgressWrapper}>
              <Button
                color="primary"
                disabled={loading}
                variant="contained"
                onClick={handleSend}
                className={classes.formAddedRecipientBtn}
              >
                SEND
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClose}
              className={classes.formAddedRecipientBtn}
            >
              CANCEL
            </Button>
          </>
        )}
      </Box>
    </BoxBordered>
  );
};

FormRecipientEmail.propTypes = {};

export default FormRecipientEmail;
