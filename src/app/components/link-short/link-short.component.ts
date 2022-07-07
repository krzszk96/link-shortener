import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-link-short',
  templateUrl: './link-short.component.html',
  styleUrls: ['./link-short.component.scss']
})
export class LinkShortComponent implements OnInit {

  shortlink:any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.currentMessage.subscribe(message => (
      this.shortlink= message
    )); 
  }

}
