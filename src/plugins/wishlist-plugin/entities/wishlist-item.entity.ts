import { DeepPartial, ID, EntityId, ProductVariant, VendureEntity, } from "@vendure/core";
import { Column, Entity, ManyToOne } from 'typeorm';

export class WishlistItem extends VendureEntity {
    constructor(input?: DeepPartial<WishlistItem>) {
        super(input);
 
   }

    @ManyToOne(type => ProductVariant)
    productVariant: ProductVariant;

    @EntityId()
    productVariantId: ID;
}
