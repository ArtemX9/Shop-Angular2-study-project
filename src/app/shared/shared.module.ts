import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemEffectsDirective } from './directives/item-effects/item-effects.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemEffectsDirective],
  exports: [ItemEffectsDirective]
})
export class SharedModule { }
