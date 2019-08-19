import palette from '../palette';
import typography from '../typography';

export default {
  root: {
    borderBottom: `1px solid ${palette.grey[300]}`,
    ...typography.body2,
    lineHeight: '48px',
    padding: '0 24px'
  }
};
