import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import {Content} from '../content-card/content-card-helper';
import {CONTENT} from '../contentDb';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentListService {

  constructor(private messageService: MessageService) { }

 getContent(): Content [] {
    return CONTENT;
  }

  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content Has been Recieveddd!!!');
    return of(CONTENT);


  }






}
