import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {

  @Input() imgUrl: string;
  @Input() imgDescription: string;
  @Input() descriptionUnderPicture: boolean = true;
  isModalActive: boolean = false;
  imgText: string;

  constructor() {
  }

  get description(): string {
    this.imgDescription ? this.imgText = this.imgDescription : this.imgText = this.imgUrl;
    return this.imgText;
  }

  public modalBodySwitch() {
    this.isModalActive = !this.isModalActive;
  }
}
