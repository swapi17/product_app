import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ViewModeDirective } from './product-view/editable/view-mode.directive';
import { EditModeDirective } from './product-view/editable/edit-mode.directive';
import { EditableComponent } from './product-view/editable/editable.component';
import { ProductService } from './product.service';
import { WebRequestService } from './web-request.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule],
  declarations: [ AppComponent, HeaderComponent, ProductViewComponent, ProductCreateComponent, EditableComponent, EditModeDirective, ViewModeDirective],
  bootstrap:    [ AppComponent ],
  providers: [ProductService, WebRequestService]
})
export class AppModule { }
