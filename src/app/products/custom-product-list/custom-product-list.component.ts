import { Component, OnInit } from '@angular/core';
import { ProductListComponent} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-list',
  templateUrl: './custom-product-list.component.html',
  styleUrls: ['./custom-product-list.component.scss']
})
export class CustomProductListComponent extends ProductListComponent {

}
