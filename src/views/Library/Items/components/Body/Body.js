import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/EditOutlined';
import LabelText from '../../../../../components/LabelText';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Table from '../../../../../components/CustomizedTable';
import CustomizedIconButton from '../../../../../components/CustomizedIconButton';

const useStyles = makeStyles({});

const columns = [
  {
    key: 'sku',
    title: 'SKU',
    width: 200,
    sorting: true
  },
  {
    key: 'name',
    title: 'Name',
    sorting: true
  },
  {
    key: 'category',
    title: 'Category',
    align: 'center'
  },
  {
    key: 'stock',
    title: 'In Stock',
    align: 'center'
  },
  {
    key: 'stock_status',
    title: 'Stock Alert',
    align: 'center',
    render: text => <LabelText color="success">{text.stock_status}</LabelText>
  },
  {
    key: 'action',
    title: '',
    align: 'center',
    width: 160,
    // eslint-disable-next-line react/display-name
    render: () => (
      <>
        <CustomizedIconButton size="small" color="warning">
          <EditIcon />
        </CustomizedIconButton>
        <CustomizedIconButton size="small" color="danger">
          <DeleteIcon />
        </CustomizedIconButton>
      </>
    )
  }
];

const dataSource = [
  {
    sku: 'AAAA',
    name: 'Barang 1',
    category: 'Category 1',
    stock: 12,
    stock_status: 'HIGH'
  },
  {
    sku: 'BBBB',
    name: 'Barang 2',
    category: 'Category 2',
    stock: 3,
    stock_status: 'LOW'
  },
  {
    sku: 'CCCC',
    name: 'Barang 3',
    category: 'Category 3',
    stock: 6,
    stock_status: 'NORMAL'
  }
];

const Body = props => {
  return <Table columns={columns} dataSource={dataSource} pagination />;
};

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Body;
