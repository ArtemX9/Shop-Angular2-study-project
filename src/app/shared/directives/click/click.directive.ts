import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @Input() fontSize: number;
  @Input() defaultFontSize: number;

  constructor(private renderer2: Renderer2, private elementRef: ElementRef) { }

  @HostListener('click') onClick() {
    this.setFont();
  }

  private setFont() {
    if (this.elementRef.nativeElement.style.fontSize === '26px') {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size', `${this.defaultFontSize}px`);
    } else {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size', `${this.fontSize}px`);
    }
  }
}
