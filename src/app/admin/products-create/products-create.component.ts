import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css'],
})
export class ProductsCreateComponent implements OnInit {
  title = '';
  image = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  //submit ke andar data create karna hai
  submit() {
    const data = {
      title: this.title,
      image: this.image,
    };

    this.productService.create(data).subscribe(() => {
      this.router.navigate(['/admin/products']);
    });
  }
}
