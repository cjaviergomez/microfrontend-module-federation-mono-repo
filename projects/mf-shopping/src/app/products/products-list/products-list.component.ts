import { Component } from '@angular/core';
import { IProductCard } from '../../models';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products: IProductCard[] = [];

  constructor(private _animeService: AnimeService) {}

  ngOnInit(): void {
    this._animeService.getAnimes().subscribe((response) => {
      this.products = response;
    });
  }
}
