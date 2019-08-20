import clsx from 'clsx';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[300],
    minHeight: 200
  },
  table: {},
  tableHead: {
    backgroundColor: '#fafafa'
  },
  tableHeadCell: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    ...theme.typography.body2,
    lineHeight: '50px',
    padding: '0 24px',
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  tableCell: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    ...theme.typography.body2,
    lineHeight: '48px',
    padding: '0 24px'
  },
  tableCellSorted: {
    background: '#0767DB',
    color: '#fff'
  },
  tableCellSort: {
    left: 14
  },
  loading: {
    position: 'relative',
    opacity: 1
  },
  loadingOn: {
    opacity: 0.5,
    userSelect: 'none',
    pointerEvents: 'none',
    transition: theme.transitions.create(['opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  loadingOff: {
    opacity: 1,
    transition: theme.transitions.create(['opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  loadingIcon: {
    position: 'absolute',
    display: 'none',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)'
  },
  loadingIconOn: {
    display: 'initial'
  },
  pointer: {
    cursor: 'pointer'
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

const TableQuery = ({
  key,
  text,
  children,
  align,
  style,
  className,
  options = {}
}) => {
  return (
    <TableCell key={key} align={align} style={style} className={className}>
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
  className: PropTypes.object,
  options: PropTypes.object
};

columnToCell.defaultProps = {
  align: 'left'
};

columnToCell.propTypes = {
  key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string,
  align: PropTypes.string
};

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const CustomizedTable = props => {
  const classes = useStyles();
  const {
    columns,
    dataSource,
    footer,
    pagination,
    rowsOnClick,
    rowsPerPageOptions,
    onRequestSort,
    onRequestPage,
    onRequestRowPerPage,
    rootOrder,
    optionSortedCell,
    count,
    hovered
  } = props;

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [loading, setLoading] = React.useState(false);
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

  async function handleChangePage(event, newPage) {
    await Promise.all([
      setLoading(true),
      onRequestRowPerPage(newPage),
      timeout(500)
    ]);
    setPage(newPage);
    setLoading(false);
  }

  async function handleChangeRowsPerPage(event) {
    const rowPerPage = parseInt(event.target.value, 10);

    await Promise.all([
      setLoading(true),
      onRequestPage(0),
      onRequestRowPerPage(rowPerPage),
      timeout(500)
    ]);

    setRowsPerPage(rowPerPage);
    setPage(0);
    setLoading(false);
  }

  async function createSortHandler(event, property) {
    await Promise.all([
      setLoading(true),
      onRequestSort(event, property),
      timeout(500)
    ]);
    handleRequestSort(event, property);
    setLoading(false);
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

  const createdRowBodyCell = (idx, data, columns, options) => {
    const { selected } = options;
    return (
      <TableRow
        hover
        selected={selected}
        key={data.key || data.id || idx}
        className={clsx({
          [classes.pointer]: rowsOnClick
        })}
        {...(rowsOnClick ? { onClick: e => rowsOnClick(e, data) } : null)}
      >
        {columns.map(column => {
          const { key, render } = column;

          const columnCell = columnToCell(column);
          const sourceCell = sourceToCell(columnCell);

          if (render) {
            sourceCell['text'] = render(data);
          } else {
            sourceCell['text'] = data[key];
          }

          return (
            <TableQuery
              key={key}
              {...sourceCell}
              className={classes.tableCell}
            />
          );
        })}
      </TableRow>
    );
  };

  function GenerateBody(array) {
    return array
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((item, idx) => createdRowBodyCell(idx, item, columns, tableOptions));
  }

  const splitDate = data => ({
    day: new Date(data).getDate(),
    month: new Date(data).getMonth(),
    year: new Date(data).getFullYear()
  });

  function splitByOrder(array, sliceOption) {
    const { key, type } = sliceOption;
    let _;

    if (type.slice(0, 4) === 'date') {
      const specificDate = type.slice(5);

      if (specificDate === 'day') {
        _ = array.reduce((result, item) => {
          const currentDate = item[key];
          const { day, month, year } = splitDate(currentDate);
          const newKey = [day, month + 1, year].join('/');

          if (result[newKey]) result[newKey].push(item);
          else {
            result[newKey] = [];
            result[newKey].push(item);
          }

          return result;
        }, {});
      } else if (specificDate === 'month') {
        _ = array.reduce((result, item) => {
          const currentDate = item[key];
          const { month, year } = splitDate(currentDate);
          const newKey = [month + 1, year].join('/');

          if (result[newKey]) result[newKey].push(item);
          else {
            result[newKey] = [];
            result[newKey].push(item);
          }

          return result;
        }, {});
      } else if (specificDate === 'year') {
        _ = array.reduce((result, item) => {
          const currentDate = item[key];
          const { year } = splitDate(currentDate);
          const newKey = year;

          if (result[newKey]) result[newKey].push(item);
          else {
            result[newKey] = [];
            result[newKey].push(item);
          }

          return result;
        }, {});
      }
    } else {
      _ = array.reduce((result, item) => {
        const newKey = item[key];

        if (result[newKey]) result[newKey].push(item);
        else {
          result[newKey] = [];
          result[newKey].push(item);
        }

        return result;
      }, {});
    }

    return _;
  }

  function GenerateBodyWithRootOrder(array) {
    let res,
      node = [];

    res = stableSort(array, getSorting(order, orderBy));
    res = splitByOrder(res, rootOrder);

    for (const index in res) {
      let nodeHead, nodeBody;

      nodeHead = (
        <TableRow>
          <TableCell
            colspan={columns.length}
            className={classes.tableCellSorted}
          >
            {optionSortedCell(index)}
          </TableCell>
        </TableRow>
      );

      nodeBody = GenerateBody(res[index]);

      node.push(nodeHead, nodeBody);
    }

    return node;
  }

  return (
    <Paper className={classes.root}>
      <div
        className={clsx(classes.loading, {
          [classes.loadingOn]: loading,
          [classes.loadingOff]: !loading
        })}
      >
        <CircularProgress
          className={clsx(classes.loadingIcon, {
            [classes.loadingIconOn]: loading
          })}
        />
        <Table hover className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {columns.map(e => {
                const data = columnToCell(e);
                if (data.options.sorting) {
                  const isAlignCenter = data.align === 'center';

                  return (
                    <TableQuery
                      {...data}
                      key={data.key}
                      className={classes.tableHeadCell}
                    >
                      <TableSortLabel
                        className={clsx({
                          [classes.tableCellSort]: isAlignCenter
                        })}
                        active={orderBy === data.key}
                        direction={order}
                        onClick={e => createSortHandler(e, data.key)}
                      >
                        {data.text}
                      </TableSortLabel>
                    </TableQuery>
                  );
                } else {
                  return (
                    <TableQuery
                      {...data}
                      key={data.key}
                      className={classes.tableHeadCell}
                    />
                  );
                }
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {!rootOrder
              ? GenerateBody(stableSort(rows, getSorting(order, orderBy)))
              : GenerateBodyWithRootOrder(rows)}
            {emptyRows > 0 && pagination && (
              <TableRow style={{ height: 49 * emptyRows }}>
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
      </div>
    </Paper>
  );
};

CustomizedTable.defaultProps = {
  columns: [],
  dataSource: [],
  rowsPerPageOptions: [5, 10, 25],
  onRequestSort: () => {},
  onRequestPage: () => {},
  onRequestRowPerPage: () => {},
  optionSortedCell: text => text
};

CustomizedTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  dataSource: PropTypes.arrayOf(PropTypes.object),
  footer: PropTypes.node,
  count: PropTypes.number,
  pagination: PropTypes.bool,
  onRequestSort: PropTypes.func,
  onRequestPage: PropTypes.func,
  onRequestRowPerPage: PropTypes.func,
  rowsOnClick: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  hovered: PropTypes.bool,
  loading: PropTypes.bool,
  rootOrder: PropTypes.object,
  optionSortedCell: PropTypes.func
};

export default CustomizedTable;
