import { BackOfficeLayout } from '../src/layouts';
import { Outlet } from '../src/views';
import 'isomorphic-unfetch';

const OutletRoute = () => {};

OutletRoute.pageTitle = 'Outlets';
OutletRoute.Layout = BackOfficeLayout;
OutletRoute.Content = Outlet;
OutletRoute.getInitialProps = async () => {
  return {};
};

export default OutletRoute;
