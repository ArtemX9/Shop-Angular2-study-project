import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appItemEffects]'
})
export class ItemEffectsDirective {

  constructor() { }
  @HostListener('mouseenter', ['$event'])
  onHover(event: Event) {
    (<HTMLElement>event.target).style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave', ['$event'])
  onBlur(event: Event) {
    (<HTMLElement>event.target).style.backgroundColor = 'transparent';
  }
}
