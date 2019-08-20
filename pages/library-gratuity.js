import { Library } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const LibraryGratuity = () => {};

LibraryGratuity.displayName = 'LibraryGratuity';
LibraryGratuity.pageTitle = 'Gratuity';
LibraryGratuity.Layout = BackOfficeLayout;
LibraryGratuity.Content = Library.Gratuity;

export default LibraryGratuity;
