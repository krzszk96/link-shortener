import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
  selector: 'app-link-get',
  templateUrl: './link-get.component.html',
  styleUrls: ['./link-get.component.scss']
})
export class LinkGetComponent implements OnInit {

  @Output() passLink:EventEmitter<any> = new EventEmitter();

  constructor(private apiService: ApiService, private tinyUrl: NgTinyUrlService) { }

  ngOnInit(): void {
  }

  getLink(link: string){    
    this.tinyUrl.shorten(link).subscribe(res => {
      this.apiService.changeMessage(res);      
    });    
  }

}
