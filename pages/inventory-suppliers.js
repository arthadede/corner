import { Inventory } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const InventorySuppliers = () => {};

InventorySuppliers.displayName = 'InventorySuppliers';
InventorySuppliers.pageTitle = 'Inventory Suppliers';
InventorySuppliers.Layout = BackOfficeLayout;
InventorySuppliers.Content = Inventory.Suppliers;

export default InventorySuppliers;
