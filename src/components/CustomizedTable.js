import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
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

const TableQuery = ({ key, text, align, style }) => (
  <TableCell key={key} align={align} style={style}>
    {text}
  </TableCell>
);

TableQuery.propTypes = {
  key: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  text: PropTypes.oneOfType(PropTypes.string, PropTypes.node).isRequired,
  align: PropTypes.string,
  style: PropTypes.object
};

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

        return TableQuery(sourceCell);
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
  const {
    columns,
    dataSource,
    footer,
    pagination,
    rowsPerPageOptions,
    count
  } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  const rows = dataSource;
  const rowsLength = count || rows.length;
  const columnsLength = columns.length;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rowsLength - page * rowsPerPage);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>{columns.map(e => TableQuery(columnToCell(e)))}</TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, idx) => createdRowBodyCell(idx, item, columns))}

          {emptyRows > 0 && pagination && (
            <TableRow style={{ height: 77 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          {footer}
        </TableBody>
        {pagination && (
          <TableFooter>
            {pagination && (
              <TableRow>
                <TablePagination
                  colSpan={columnsLength}
                  count={rowsLength}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={rowsPerPageOptions}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableRow>
            )}
          </TableFooter>
        )}
      </Table>
    </Paper>
  );
};

CustomizedTable.defaultProps = {
  rowsPerPageOptions: [5, 10, 25]
};

CustomizedTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  dataSource: PropTypes.arrayOf(PropTypes.object),
  footer: PropTypes.node,
  count: PropTypes.number,
  pagination: PropTypes.bool,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number)
};

export default CustomizedTable;
