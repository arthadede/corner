import { Library } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const LibraryDiscounts = () => {};

LibraryDiscounts.displayName = 'LibraryDiscounts';
LibraryDiscounts.pageTitle = 'Discounts';
LibraryDiscounts.Layout = BackOfficeLayout;
LibraryDiscounts.Content = Library.Discounts;

export default LibraryDiscounts;
