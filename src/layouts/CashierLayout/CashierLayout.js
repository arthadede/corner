import React from 'react';
import PropTypes from 'prop-types';

const CashierLayout = props => {
  const { children } = props;

  return (
    <div>
      <h3>Cashier</h3>
      {children}
    </div>
  );
};

CashierLayout.displayName = 'Cashier-Layout';
CashierLayout.propTypes = {
  children: PropTypes.node
};

export default CashierLayout;
