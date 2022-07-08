import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {NgTinyUrlService} from 'ng-tiny-url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private tinyUrl: NgTinyUrlService) {}

  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();
  
  convertLink(link:string){
    this.tinyUrl.shorten(link).subscribe(res => { 
      this.messageSource.next(res)   
    });
  }
}
