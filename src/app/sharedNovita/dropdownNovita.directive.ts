import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownNovita]'
})
export class DropdownNovitaDirective {

  @HostBinding('class.open') isOpen=false;

  @HostListener('click') toggleOpen()
  {
    this.isOpen=!this.isOpen;
  }

  //constructor() { }

}
