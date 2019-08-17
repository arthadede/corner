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
      placeholder="8222 - 3333 - 444"
      placeholderChar={'\u2000'}
    />
  );
};

MaskedPhoneInput.propTypes = {};

export default MaskedPhoneInput;
