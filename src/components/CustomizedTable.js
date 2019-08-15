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
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {},
  table: {},
  tableCellSort: {
    left: 14
  }
}));

const columnToCell = ({ key, title, align, width, ...rest }) => {
  const cellDto = {};
  cellDto['key'] = key;
  cellDto['text'] = title;
  cellDto['align'] = align;
  cellDto['style'] = {};
  cellDto['style']['width'] = width;
  cellDto['options'] = rest;

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

const TableQuery = ({ key, text, children, align, style, options = {} }) => {
  return (
    <TableCell key={key} align={align} style={style}>
      {children || text}
    </TableCell>
  );
};

TableQuery.propTypes = {
  key: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  text: PropTypes.oneOfType(PropTypes.string, PropTypes.node).isRequired,
  children: PropTypes.PropTypes.node,
  align: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.object
};

const createdRowBodyCell = (idx, data, columns, options) => {
  const { hover } = options;
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

        return <TableQuery key={key} {...sourceCell} />;
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
    onRequestSort,
    count,
    hovered
  } = props;

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  const rows = dataSource;
  const rowsLength = count || rows.length;
  const columnsLength = columns.length;
  const tableOptions = {
    hover: hovered
  };

  React.useEffect(() => {
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sorting) {
        setOrderBy(columns[i].key);
        columns[i].sorted && setOrder(columns[i].sorted);
        return;
      }
    }
  }, [columns]);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rowsLength - page * rowsPerPage);

  function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  async function createSortHandler(event, property) {
    await onRequestSort(event, property);
    await handleRequestSort(event, property);
  }

  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  function getSorting(order, orderBy) {
    return order === 'desc'
      ? (a, b) => desc(a, b, orderBy)
      : (a, b) => -desc(a, b, orderBy);
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map(e => {
              const data = columnToCell(e);
              if (data.options.sorting) {
                return (
                  <TableQuery {...data}>
                    <TableSortLabel
                      classes={{ root: classes.tableCellSort }}
                      active={orderBy === data.key}
                      direction={order}
                      onClick={e => createSortHandler(e, data.key)}
                    >
                      {data.text}
                    </TableSortLabel>
                  </TableQuery>
                );
              } else {
                return <TableCell key={data.key}>{data.text}</TableCell>;
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(rows, getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, idx) =>
              createdRowBodyCell(idx, item, columns, tableOptions)
            )}
          {emptyRows > 0 && pagination && (
            <TableRow style={{ height: 48 * emptyRows }}>
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
  rowsPerPageOptions: [5, 10, 25],
  onRequestSort: () => {}
};

CustomizedTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  dataSource: PropTypes.arrayOf(PropTypes.object),
  footer: PropTypes.node,
  count: PropTypes.number,
  pagination: PropTypes.bool,
  onRequestSort: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  hovered: PropTypes.bool
};

export default CustomizedTable;
