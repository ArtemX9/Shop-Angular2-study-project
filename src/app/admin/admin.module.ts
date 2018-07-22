import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {adminComponents, AdminRoutingModule} from './admin-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ProductEditFormComponent } from './components/product-edit-form/product-edit-form.component';
import { ProductEditableItemComponent } from './components/product-editable-item/product-editable-item.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [adminComponents, ProductEditFormComponent, ProductEditableItemComponent]
})
export class AdminModule { }
