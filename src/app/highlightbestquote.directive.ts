import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightbestquote]'
})
export class HighlightbestquoteDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor = '#D4AC91';
  }

}
