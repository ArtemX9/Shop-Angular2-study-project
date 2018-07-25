import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConstantsService} from './services/constants.service';
import {GeneratorService} from './services/generator.service';
import {LocalStorageService} from './services/local-storage.service';
import {AuthService} from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [{
    provide: ConstantsService.token,
    useValue: ConstantsService.value
  }, {
    provide: GeneratorService.token,
    useFactory: GeneratorService.factory(5)
  },
  LocalStorageService,
    AuthService
  ]
})
export class CoreModule { }
