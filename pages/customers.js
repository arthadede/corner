import { BackOfficeLayout } from '../src/layouts';
import { Customer } from '../src/views';

const Customers = () => {};

Customers.pageTitle = 'Customers';
Customers.Layout = BackOfficeLayout;
Customers.Content = Customer;
Customers.getInitialProps = async () => {
  return {};
};

export default Customers;
