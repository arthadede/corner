import { Library } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const LibraryTaxes = () => {};

LibraryTaxes.displayName = 'LibraryTaxes';
LibraryTaxes.pageTitle = 'Taxes';
LibraryTaxes.Layout = BackOfficeLayout;
LibraryTaxes.Content = Library.Taxes;

export default LibraryTaxes;
