import {InjectionToken} from '@angular/core';

export const ConstantsService = {
  token: new InjectionToken<string>('ConstantsService'),
  value: {
    App: 'Shop',
    Ver: '1.0'
  }
};
