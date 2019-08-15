import Switch from '@material-ui/core/Switch';
import withStyles from '@material-ui/styles/withStyles';

export default withStyles(theme => ({
  root: {
    width: 32,
    height: 18,
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: 2,
    color: theme.palette.common.white,
    '&$checked': {
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      }
    }
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: 'none'
  },
  track: {
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor: theme.palette.grey[500]
  },
  checked: {}
}))(Switch);
