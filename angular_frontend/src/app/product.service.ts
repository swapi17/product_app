import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable()
export class ProductService {
  
  



  constructor(private webReqService: WebRequestService) { }

    search(queryString: string) {
      let _URL = 'products/serach?q='+ queryString;
      return this.webReqService.get( _URL);
  }
  


  getAllProducts() {
     // We want to send a web request to retrieve all the products
     return this.webReqService.get('products');
  }

  updateProductFieldById(productId: string, field: string, value:string) {
    // We want to send a web request to update a product
    return this.webReqService.patch(`product/${productId}`, {field,value});
  }


  createProduct(name:string,quantity:string,costPrice:string,sellingPrice:string) {
    // We want to send a web request to create a product
    return this.webReqService.post(`product/create`, {name,quantity,costPrice,sellingPrice});
  }

}