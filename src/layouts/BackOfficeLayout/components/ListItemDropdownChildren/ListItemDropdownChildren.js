import { withStyles } from '@material-ui/core/styles';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ListItemDropdownChildren = withStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 0
  }
})(ExpansionPanelDetails);

export default ListItemDropdownChildren;
