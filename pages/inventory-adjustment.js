import { Inventory } from '../src/views';
import { BackOfficeLayout } from '../src/layouts';

const InventoryAdjustment = () => {};

InventoryAdjustment.displayName = 'InventoryAdjustment';
InventoryAdjustment.pageTitle = 'Adjustment';
InventoryAdjustment.Layout = BackOfficeLayout;
InventoryAdjustment.Content = Inventory.Adjustment;

export default InventoryAdjustment;
