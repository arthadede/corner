import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {},
  table: {}
}));

const columnToCell = ({ key, title, align, width }) => {
  const cellDto = {};
  cellDto['key'] = key;
  cellDto['text'] = title;
  cellDto['align'] = align;
  cellDto['style'] = {};
  cellDto['style']['width'] = width;

  return cellDto;
};

const sourceToCell = ({ key, text, align, style }) => {
  const cellDto = {};
  cellDto['key'] = key;
  cellDto['text'] = text;
  cellDto['align'] = align;
  cellDto['style'] = style;

  return cellDto;
};

const createdCell = ({ key, text, align, style }) => (
  <TableCell key={key} align={align} style={style}>
    {text}
  </TableCell>
);

const createdRowBodyCell = (idx, data, columns) => {
  return (
    <TableRow key={data.key || data.id || idx}>
      {columns.map(column => {
        const { key, render } = column;

        const columnCell = columnToCell(column);
        const sourceCell = sourceToCell({ ...columnCell });

        if (render) {
          sourceCell['text'] = render(data);
        } else {
          sourceCell['text'] = data[key];
        }

        return createdCell(sourceCell);
      })}
    </TableRow>
  );
};

columnToCell.defaultProps = {
  align: 'left'
};

columnToCell.propTypes = {
  key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string,
  align: PropTypes.string
};

const CustomizedTable = props => {
  const classes = useStyles();
  const { columns, dataSource } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>{columns.map(e => createdCell(columnToCell(e)))}</TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((item, idx) =>
            createdRowBodyCell(idx, item, columns)
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

CustomizedTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  dataSource: PropTypes.arrayOf(PropTypes.object)
};

export default CustomizedTable;
