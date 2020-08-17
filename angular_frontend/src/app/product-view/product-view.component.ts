import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { map, filter, scan, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

   

  products: Product[] = [ new Product("1","AC","56","200","278")
    ,new Product("2","Phones","6","100","258"),new Product("2","Phones","6","100","258"),new Product("2","Phones","6","100","258"),new Product("2","Phones","6","100","258"),new Product("2","Phones","6","100","258")];

  controls: FormArray;
  results: any[] = [];
  queryField: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    
   }

  ngOnInit() {
    
    // this.productService.getAllProducts().subscribe((res: any) => {
    //         this.products = res.data;
    //       });

    const toGroups = this.products.map(product => {

       this.queryField.valueChanges
    .pipe(debounceTime(200)
    ,distinctUntilChanged(),switchMap((query) =>  this.productService.search(query)))
    .subscribe( result => { 
   
  });

      return new FormGroup({
        name: new FormControl(product.name, Validators.required),
        sellingPrice: new FormControl(product.costPrice)
      });
    });
    this.controls = new FormArray(toGroups);

    
    
  }

  getControl(index: number, field: string) : FormControl {
    return this.controls.at(index).get(field) as FormControl;
  }

   updateField(index: number, field: string, id: string) {
    const control = this.getControl(index, field);
    console.log(id);
    console.log(field);
    console.log(control.value);

    if (control.valid) {
      this.productService.updateProductFieldById(id,field,control.value)
      this.products = this.products.map((e, i) => {
        if (index === i) {
          return {
            ...e,
            [field]: control.value
          }
        }
        return e;
      })
    }
  console.log(this.products);
  }

}