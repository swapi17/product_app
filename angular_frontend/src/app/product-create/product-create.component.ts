import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  

  onCreate(name:string,quantity:string,costPrice:string,sellingPrice:string) {
    this.productService.createProduct(name,quantity,costPrice,sellingPrice).subscribe(res=> {
      
        // we have logged in successfully
       
        console.log(res);
      
   });
   }

}