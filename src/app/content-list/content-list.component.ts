import { Component, Input, OnInit } from '@angular/core';
import { Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
content5: Content[];
constructor() { }


  ngOnInit() {
    this.content5 = new Array();
    this.content5[0] = {
        contentId: 1,
        author: 'Tim Toth',
        imgUrl: 'assets/img/img.jpg',
        body: 'good book',
        type: 'romance'
    };
      this.content5[1] = {
          contentId: 2,
          author: 'John Kobersi',
          imgUrl: 'assets/img/img.jpg',
          body: 'bad book',
          type: 'funny'
      };
      this.content5[2] = {
          contentId: 3,
          author: 'The Dancer',
          imgUrl: 'assets/img/img.jpg',
          body: 'Dancing book',
          type: 'Magic'
      };
      this.content5[3] = {
          contentId: 4,
          author: 'The globe',
          imgUrl: 'assets/img/img.jpg',
          body: 'Earth book',
          type: 'Foot work'
      };
      this.content5[4] = {
          contentId: 5,
          author: 'Khabib',
          imgUrl: 'assets/img/img.jpg',
          body: 'Nurmeganadov book',
          type: 'Knockout'
      };
    }
}
