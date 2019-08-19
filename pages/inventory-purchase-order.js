import { Inventory } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const InventoryPurchaseOrder = () => {};

InventoryPurchaseOrder.displayName = 'InventoryPurchaseOrder';
InventoryPurchaseOrder.pageTitle = 'Inventory Purchase Order';
InventoryPurchaseOrder.Layout = BackOfficeLayout;
InventoryPurchaseOrder.Content = Inventory.PurchaseOrder;

export default InventoryPurchaseOrder;
