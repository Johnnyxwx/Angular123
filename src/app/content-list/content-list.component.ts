import { Component, OnInit } from '@angular/core';
import { Content} from '../content-card/content-card-helper';
import { ContentListService } from '../services/content-list.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
    content5: Content[];
    typeCheck: string;

    constructor(private contentService: ContentListService) {
        this.contentService.getContentObs().subscribe(contentArray => this.content5 = contentArray);
    }


    ngOnInit() {

    }

    clickEvent() {
        const numOfResults = this.content5.filter(c => c.type === this.typeCheck).length;
        alert('Found this many results:' + numOfResults);

    }
}