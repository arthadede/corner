import { BackOfficeLayout } from '../src/layouts';
import { CustomerDetail } from '../src/views';

const CustomersDetail = () => {};

CustomersDetail.pageTitle = 'Customers Detail';
CustomersDetail.Layout = BackOfficeLayout;
CustomersDetail.Content = CustomerDetail;
CustomersDetail.getInitialProps = async () => {
  return {};
};

export default CustomersDetail;
