import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const MaskedPhoneInput = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        '-',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        '-',
        ' ',
        /\d/,
        /\d/,
        /\d/
      ]}
      showMask
      guide={false}
      placeholderChar={'\u2000'}
    />
  );
};

MaskedPhoneInput.defaultProps = {
  inputRef: () => {}
};

MaskedPhoneInput.propTypes = {
  inputRef: PropTypes.func
};

export default MaskedPhoneInput;
