import {Directive, ElementRef ,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTextDecoration]'
})
export class TextDecorationDirective {
@Input() sun: string;
  constructor(private elm: ElementRef) {

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.check(this.sun);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.check('none');
  }
  private check(sun) {
    this.elm.nativeElement.style.textDecoration = sun;
  }

}
