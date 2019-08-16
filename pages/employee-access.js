import { BackOfficeLayout } from '../src/layouts';
import { Employee } from '../src/views';

const CheckoutSettings = () => {};

CheckoutSettings.pageTitle = 'Employee Access';
CheckoutSettings.Layout = BackOfficeLayout;
CheckoutSettings.Content = Employee.Access;
CheckoutSettings.getInitialProps = async () => {
  return {};
};

export default CheckoutSettings;
