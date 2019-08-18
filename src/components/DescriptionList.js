import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  descriptionListItem: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    padding: '0 32px',
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  descriptionListItemHead: {
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: '#FAFAFA',
    color: theme.palette.text.secondary
  },
  descriptionListItemBody: {}
}));

const DescriptionList = ({ dataSource, optionValueProp, optionLabelProp }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      {dataSource.map((item, index) => (
        <Grid key={index} container>
          <Grid item xs={6}>
            <Box
              className={clsx(
                classes.descriptionListItem,
                classes.descriptionListItemHead
              )}
            >
              {item[optionLabelProp]}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              className={clsx(
                classes.descriptionListItem,
                classes.descriptionListItemBody
              )}
            >
              {item[optionValueProp]}
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

DescriptionList.defaultProps = {
  dataSource: [],
  optionLabelProp: 'label',
  optionValueProp: 'value'
};

DescriptionList.propTypes = {
  dataSource: PropTypes.array,
  optionLabelProp: PropTypes.string,
  optionValueProp: PropTypes.string
};

export default DescriptionList;
