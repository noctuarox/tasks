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
  @Input() imgIndex: number;
  isModalActive: boolean = false;

  constructor() {

  }

  ngOnInit() {
    if(!this.imgDescription){
      this.imgDescription = this.imgUrl;
    }
  }

  public modalBodySwitch(){
    if(this.isModalActive){
      this.isModalActive = false;
    }else{
      this.isModalActive = true;
    }
  }
}
