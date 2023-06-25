import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [{ path: '', component: ProductsListComponent }];

@NgModule({
  declarations: [ProductCardComponent, ProductsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
