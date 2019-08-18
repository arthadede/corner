import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';

import palette from '../theme/palette';

const BoxBordered = withStyles({
  root: {
    backgroundColor: palette.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.grey[300],
    borderRadius: 4
  }
})(Box);

export default BoxBordered;
