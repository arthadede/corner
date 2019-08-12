import PropTypes from 'prop-types';

const BlankLayout = ({ children }) => children;

BlankLayout.displayName = 'Blank-Layout';
BlankLayout.propTypes = {
  children: PropTypes.node
};

export default BlankLayout;
