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

  constructor() {
  }

  get description(): string {
    return this.imgDescription ? this.imgDescription : this.imgUrl;
  }

  public modalBodySwitch() {
    this.isModalActive = !this.isModalActive;
  }
}
