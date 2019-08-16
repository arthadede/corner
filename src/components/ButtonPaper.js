import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.white,
    transition: theme.transitions.create(['color', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white,
      cursor: 'pointer'
    }
  },
  avatar: {
    width: 110,
    height: 110,
    marginBottom: 16
  }
}));

const ButtonPaper = props => {
  const { className, style, src, label, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper {...rest} className={clsx(classes.root, className)} style={style}>
      <img
        src={src}
        alt="outlet1.png"
        height="110px"
        width="110px"
        className={classes.avatar}
      />
      <Typography variant="subtitle2" color="inherit" align="center">
        {label}
      </Typography>
    </Paper>
  );
};

ButtonPaper.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string,
  label: PropTypes.string
};

export default ButtonPaper;
