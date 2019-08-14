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
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

const SearchInput = props => {
  const classes = useStyles();
  const { className, ...rest } = props;

  return (
    <Paper className={clsx(classes.root, className)}>
      <IconButton disabled>
        <SearchIcon />
      </IconButton>
      <InputBase {...rest} />
    </Paper>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string
};

export default SearchInput;
