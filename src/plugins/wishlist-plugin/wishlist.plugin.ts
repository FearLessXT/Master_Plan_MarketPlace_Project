import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { WishlistItem } from "./entities/wishlist-item.entity";

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [WishlistItem]
})

export class WishlistPlugin {}