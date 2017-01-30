import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() imgDescription: string;
  @Input() descriptionUnderPicture: boolean = true;

  constructor() { }

  ngOnInit() {
    if(!this.imgDescription){
      this.imgDescription = this.imgUrl;
    }
    console.log(this.imgDescription);
    console.log(this.descriptionUnderPicture);
  }

}
