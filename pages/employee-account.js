import { BackOfficeLayout } from '../src/layouts';
import { Employee } from '../src/views';

const CheckoutSettings = () => {};

CheckoutSettings.pageTitle = 'Employee Account';
CheckoutSettings.Layout = BackOfficeLayout;
CheckoutSettings.Content = Employee.Account;
CheckoutSettings.getInitialProps = async () => {
  return {};
};

export default CheckoutSettings;
