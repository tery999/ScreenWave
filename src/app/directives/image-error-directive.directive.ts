import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'img[appImageErrorDirective]',
  host: {
    '(error)':'changeImage()',
    '[src]':'src'
  }
})
export class ImageErrorDirectiveDirective {
  @Input() src!:string;
  DefaultMissingImage:string = "../assets/missingMoviePicture.jpg"

  changeImage() {
    this.src = this.DefaultMissingImage;
  }

}
