import { Library } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const LibraryCategories = () => {};

LibraryCategories.displayName = 'LibraryCategories';
LibraryCategories.pageTitle = 'Categories';
LibraryCategories.Layout = BackOfficeLayout;
LibraryCategories.Content = Library.Categories;

export default LibraryCategories;
