import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    padding: '8px 16px 8px 8px',
    minWidth: 300
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  input: {
    flexGrow: 1,
    ...theme.typography.body1
  }
}));

const SearchInput = props => {
  const classes = useStyles();
  const { className, ...rest } = props;

  return (
    <Paper className={clsx(classes.root, className)}>
      <div className={classes.wrapper}>
        <IconButton className={classes.icon} size="small" disabled>
          <SearchIcon fontSize="small" />
        </IconButton>
        <InputBase className={classes.input} {...rest} />
      </div>
    </Paper>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string
};

export default SearchInput;
