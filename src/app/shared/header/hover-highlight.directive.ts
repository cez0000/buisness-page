import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') className: string = '';
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, this.className);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, this.className);
  }
}
