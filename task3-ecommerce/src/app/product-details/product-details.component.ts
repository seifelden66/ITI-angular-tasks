import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  theId = 0;
  details:any
  constructor(
    private productsService:ProductsService
    , private cartService: CartService
  ) {
    this.theId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(){
    this.productsService.getSingleProduct(this.theId).subscribe((res)=>this.details=res)
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
