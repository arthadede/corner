import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const MaskedCurrencyInput = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]}
      showMask
      guide={false}
      placeholderChar={'\u2000'}
    />
  );
};

MaskedCurrencyInput.defaultProps = {
  inputRef: () => {}
};

MaskedCurrencyInput.propTypes = {
  inputRef: PropTypes.func
};

export default MaskedCurrencyInput;
