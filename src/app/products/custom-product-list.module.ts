import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductListComponent } from './custom-product-list/custom-product-list.component';
import { CmsConfig, ConfigModule, FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { AddToCartModule, IconModule, ItemCounterModule, ListNavigationModule, MediaModule, OutletModule, ProductListItemComponent, ProductListModule, ProductVariantsModule, SpinnerModule, StarRatingModule, ViewConfigModule } from '@spartacus/storefront';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CustomProductGridItemComponent } from './custom-product-grid-item/custom-product-grid-item.component';
import { CustomProductListItemComponent } from './custom-product-list-item/custom-product-list-item.component';




@NgModule({
  declarations: [
    CustomProductListComponent,
    CustomProductGridItemComponent,
    CustomProductListItemComponent,
  ],
  exports: [
    CustomProductListComponent,
    CustomProductGridItemComponent,
    CustomProductListItemComponent,
  ],
  entryComponents: [
    CustomProductListComponent,
    CustomProductGridItemComponent,
    CustomProductListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    AddToCartModule,
    ItemCounterModule,
    ListNavigationModule,
    UrlModule,
    I18nModule,
    StarRatingModule,
    IconModule,
    SpinnerModule,
    InfiniteScrollModule,
    ViewConfigModule,
    ProductVariantsModule,
    FeaturesConfigModule,
    OutletModule,
    ProductListModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CMSProductListComponent: {
          component: CustomProductListComponent,
        },
        ProductGridComponent: {
          component: CustomProductListComponent,
        },
        SearchResultsListComponent: {
          component: CustomProductListComponent,
        },
      },
    } as CmsConfig),
  ]
})
export class CustomProductListModule { }
