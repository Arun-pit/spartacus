import { Component, OnInit } from '@angular/core';
import { ProductGridItemComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-grid-item',
  templateUrl: './custom-product-grid-item.component.html',
  styleUrls: ['./custom-product-grid-item.component.scss']
})
export class CustomProductGridItemComponent extends ProductGridItemComponent{

}
