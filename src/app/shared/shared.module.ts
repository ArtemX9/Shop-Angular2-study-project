import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemEffectsDirective} from './directives/item-effects/item-effects.directive';
import {ClickDirective} from './directives/click/click.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ItemEffectsDirective,
    ClickDirective
  ],
  exports: [
    ItemEffectsDirective,
    ClickDirective
  ]
})
export class SharedModule {
}
