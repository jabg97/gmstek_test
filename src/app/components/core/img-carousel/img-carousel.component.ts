import { Component, Input, OnInit } from '@angular/core';
import { IImage,IImageConfig } from 'src/app/core/interfaces/core.interface';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent implements OnInit {

  @Input() slides: IImage[] | undefined = [];
  @Input() config: IImageConfig | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
