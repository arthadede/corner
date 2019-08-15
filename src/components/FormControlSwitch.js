import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/styles';

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 51,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 0,
    marginRight: 0,
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '4px',
    padding: '0 16px'
  },
  label: {
    marginLeft: 12,
    userSelect: 'none'
  }
})(FormControlLabel);
