import { Injectable } from '@angular/core';
import { ProductsComponent } from './products/products.component';
@Injectable({
  providedIn: 'root'
})
export class SingleProductService {
  protected products:ProductsComponent[]=[]
  constructor() { }
  getAllProducts():ProductsComponent[]{
    return this.products
  }
  getProductById(id:Number):ProductsComponent|undefined{
    return this.products.find((product)=>{
      product.filteredData.id === id
    })
  }
}
