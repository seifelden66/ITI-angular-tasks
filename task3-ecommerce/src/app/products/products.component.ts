import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, FormsModule, MatInputModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any ;
  filteredData: any = [];
  searchQuery: string = '';

  constructor(private productsService:ProductsService, private cartService: CartService) {  }
  ngOnInit(){
   this.productsService.getProducts().subscribe((ss:any)=>{
    console.log(ss.products);
    this.products=ss.products
    this.filteredData=ss.products
   })
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  search(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredData = this.products;
    } else {
      this.filteredData = this.products.filter((item: any) => {
        return item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
  
}
