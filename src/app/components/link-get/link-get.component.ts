import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
  selector: 'app-link-get',
  templateUrl: './link-get.component.html',
  styleUrls: ['./link-get.component.scss']
})
export class LinkGetComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getLink(link: string){     
    this.apiService.convertLink(link) 
  }

}
