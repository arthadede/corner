import { Library } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const LibrarySalesType = () => {};

LibrarySalesType.displayName = 'LibrarySalesType';
LibrarySalesType.pageTitle = 'SalesType';
LibrarySalesType.Layout = BackOfficeLayout;
LibrarySalesType.Content = Library.SalesType;

export default LibrarySalesType;
