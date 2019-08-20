import { Library } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const LibraryItems = () => {};

LibraryItems.displayName = 'LibraryItems';
LibraryItems.pageTitle = 'Items';
LibraryItems.Layout = BackOfficeLayout;
LibraryItems.Content = Library.Items;

export default LibraryItems;
