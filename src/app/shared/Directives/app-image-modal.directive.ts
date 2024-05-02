import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageShowUpComponent } from '../components/image-show-up/image-show-up.component'

@Directive({
  selector: '[appImageModal]'
})
export class ImageModalDirective {
  constructor(private el: ElementRef, private dialog: MatDialog) { }

  @HostListener('click') onClick() {
    console.log('clicked');
    const imgElement = this.el.nativeElement as HTMLImageElement;
    const dialogRef = this.dialog.open(ImageShowUpComponent, {
      data: { src: imgElement?.src }
    });
  }
}