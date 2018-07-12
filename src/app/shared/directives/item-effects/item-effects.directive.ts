import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appItemEffects]'
})
export class ItemEffectsDirective {
  @Input() appItemEffectsColor: string;

  private DEFAULT_COLOR = 'yellow';
  private TRANSPARENT_COLOR = 'transparent';

  constructor() { }
  @HostListener('mouseenter', ['$event'])
  onHover(event: Event) {
    (<HTMLElement>event.target).style.backgroundColor = this.appItemEffectsColor || this.DEFAULT_COLOR;
  }

  @HostListener('mouseleave', ['$event'])
  onBlur(event: Event) {
    (<HTMLElement>event.target).style.backgroundColor = this.TRANSPARENT_COLOR;
  }
}
