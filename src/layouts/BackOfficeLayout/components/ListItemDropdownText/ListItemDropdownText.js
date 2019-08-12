import { withStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ListItemDropdownText = withStyles({
  root: {
    width: '100%',
    padding: 0,
    minHeight: 45,
    '&$expanded': {
      minHeight: 45
    }
  },
  content: {
    width: '100%',
    margin: 0,
    '&$expanded': {
      margin: 0
    }
  },
  expanded: {}
})(ExpansionPanelSummary);

export default ListItemDropdownText;
