import {InjectionToken} from '@angular/core';

export const GeneratorService = {
  token: new InjectionToken<any>('GeneratorService'),
  factory: function GeneratorFactory(length: number) {
    return function(): any {
      return {
        generateValue: () => {
          let text = '';
          const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

          for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          return text;
        }
      };
    };
  }
};
