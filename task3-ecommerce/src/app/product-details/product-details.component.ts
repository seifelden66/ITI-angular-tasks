import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor() {
    this.theId = Number(this.route.snapshot.params['id']);
  }
}
