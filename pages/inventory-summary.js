import { Inventory } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const InventorySummary = () => {};

InventorySummary.displayName = 'InventorySummary';
InventorySummary.pageTitle = 'Inventory Summary';
InventorySummary.Layout = BackOfficeLayout;
InventorySummary.Content = Inventory.Summary;

export default InventorySummary;
