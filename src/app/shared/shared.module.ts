import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemEffectsDirective} from './directives/item-effects/item-effects.directive';
import {ClickDirective} from './directives/click/click.directive';
import {OrderByPipe} from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ItemEffectsDirective,
    ClickDirective,
    OrderByPipe
  ],
  exports: [
    ItemEffectsDirective,
    ClickDirective,
    OrderByPipe
  ]
})
export class SharedModule {
}
