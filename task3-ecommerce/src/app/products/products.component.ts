import { Component } from '@angular/core';
import users from '../../assets/products-list.json';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, FormsModule, MatInputModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  data: any = users;
  filteredData: any = [];
  searchQuery: string = '';

  constructor() {
    this.filteredData = this.data;
  }
  search(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter((item: any) => {
        return item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
  
}
