import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnChanges {

  @Input() imgUrl: string;
  @Input() imgDescription: string;
  @Input() descriptionUnderPicture: boolean = true;
  isModalActive: boolean = false;
  imgText: string;

  constructor() {

  }

  ngOnChanges() {
    this.imgText = this.imgDescription;
    if(!this.imgText){
      this.imgText = this.imgUrl;
    }
  }

  public modalBodySwitch(){
   this.isModalActive = !this.isModalActive;
  }
}
