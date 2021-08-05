import { Component, OnInit } from '@angular/core';
import { ProductListItemComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-list-item',
  templateUrl: './custom-product-list-item.component.html',
  styleUrls: ['./custom-product-list-item.component.scss']
})
export class CustomProductListItemComponent extends ProductListItemComponent {

}
