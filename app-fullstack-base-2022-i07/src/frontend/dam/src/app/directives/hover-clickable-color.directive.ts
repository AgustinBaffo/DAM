import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[hover-clickable-color]'
})
export class HoverClickableColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseEnter() {
    this.setColor('var(--ion-color-secondary)');
    this.setCursor('pointer');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.setColor('')
    this.setCursor('default');
  }

  setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
  
  setCursor(cursor: string) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', cursor);
  }

}
