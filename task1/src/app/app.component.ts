import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private images: any[] = [
    { imgUrl: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
      imgDescription: 'Picture description with some long text, oh wait, this is not long enough, how about this long?',
      descriptionUnderPicture: false
    },
    { imgUrl: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
     // imgDescription: 'Some other picture description',
      descriptionUnderPicture: true
    }
  ];
}
