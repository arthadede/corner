import { Inventory } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const InventoryTransfer = () => {};

InventoryTransfer.displayName = 'InventoryTransfer';
InventoryTransfer.pageTitle = 'Transfer';
InventoryTransfer.Layout = BackOfficeLayout;
InventoryTransfer.Content = Inventory.Transfer;

export default InventoryTransfer;
