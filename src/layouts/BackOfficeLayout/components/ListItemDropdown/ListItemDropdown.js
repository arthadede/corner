import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

const ListItemDropdown = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 0,
    border: 0,
    boxShadow: 'none',
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    },
    '&>.MuiCollapse-container': {
      width: '100%'
    }
  },
  expanded: {}
})(ExpansionPanel);

export default ListItemDropdown;
