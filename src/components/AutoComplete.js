import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  popper: {
    zIndex: 1400,
    marginTop: theme.spacing(1)
  },
  paper: {
    width: '100%'
  },
  inputRoot: {
    flexWrap: 'wrap'
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1
  },
  divider: {
    height: theme.spacing(2)
  }
}));

const AutoComplete = props => {
  const classes = useStyles();
  const {
    label,
    dataSource,
    variant,
    optionLabelProp,
    optionValueProp,
    onChange: setSelectedItem,
    value: selectedItem
  } = props;
  const [inputValue, setInputValue] = React.useState('');
  const anchorEl = React.useRef(null);

  const dataSourceIsObject =
    optionLabelProp !== undefined && optionValueProp !== undefined
      ? true
      : false;

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleChange(item) {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue('');
    setSelectedItem(newSelectedItem);
  }

  const renderInput = inputProps => {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (
      <TextField
        ref={anchorEl}
        variant={variant}
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          ...InputProps
        }}
        {...other}
      />
    );
  };

  renderInput.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object.isRequired,
    InputProps: PropTypes.object
  };

  const renderSuggestion = suggestionProps => {
    const {
      suggestion,
      index,
      itemProps,
      highlightedIndex,
      selectedItem
    } = suggestionProps;
    const isHighlighted = highlightedIndex === index;
    const suggestionValue = dataSourceIsObject
      ? suggestion[optionValueProp]
      : suggestion;
    const suggestionLabel = dataSourceIsObject
      ? suggestion[optionLabelProp]
      : suggestion;
    const isSelected = (selectedItem || '').indexOf(suggestionValue) > -1;
    return (
      <MenuItem
        {...itemProps}
        key={suggestionValue}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {suggestionLabel}
      </MenuItem>
    );
  };

  renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.number
    ]).isRequired,
    index: PropTypes.number.isRequired,
    itemProps: PropTypes.object.isRequired,
    selectedItem: PropTypes.string.isRequired,
    suggestion: PropTypes.shape({
      label: PropTypes.string.isRequired
    }).isRequired
  };

  const getSuggestions = (value, { showEmpty = false } = {}) => {
    // const inputValue = deburr(value.trim()).toLowerCase();
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0 && !showEmpty
      ? []
      : dataSource.filter(suggestion => {
          const suggestionData = dataSourceIsObject
            ? suggestion[optionLabelProp]
            : suggestion;

          const keep =
            count < 5 &&
            suggestionData.slice(0, inputLength).toLowerCase() === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  };

  return (
    <Downshift
      id="downshift-multiple"
      inputValue={inputValue}
      onChange={handleChange}
      selectedItem={selectedItem}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        isOpen,
        inputValue: inputValue2,
        selectedItem: selectedItem2,
        highlightedIndex
      }) => {
        const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
          placeholder: label
        });

        return (
          <div className={classes.container}>
            {renderInput({
              classes,
              fullWidth: true,
              label: label,
              InputLabelProps: getLabelProps(),
              InputProps: {
                onBlur,
                onChange: event => {
                  handleInputChange(event);
                  onChange(event);
                },
                onFocus
              },
              inputProps
            })}

            <Popper
              open={isOpen}
              anchorEl={anchorEl.current}
              placement="bottom-start"
              className={classes.popper}
              transition
            >
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue2).length > 0 &&
                  getSuggestions(inputValue2).map((suggestion, index) => {
                    const suggestionLabel = dataSourceIsObject
                      ? suggestion[optionValueProp]
                      : suggestion;

                    return renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({
                        item: suggestionLabel
                      }),
                      highlightedIndex,
                      selectedItem: selectedItem2
                    });
                  })}
                {getSuggestions(inputValue2).length <= 0 && (
                  <MenuItem component="div">No Data</MenuItem>
                )}
              </Paper>
            </Popper>
          </div>
        );
      }}
    </Downshift>
  );
};

AutoComplete.defaultProps = {
  label: '',
  dataSource: [],
  value: [],
  onChange: () => {}
};

AutoComplete.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  dataSource: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
  optionValueProp: PropTypes.string,
  optionLabelProp: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.array
};

export default AutoComplete;
