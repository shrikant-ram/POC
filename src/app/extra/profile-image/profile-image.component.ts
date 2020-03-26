import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit, AfterViewInit {

  @Input() urlPath: string = '';
  @Input() height: string = '60';
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.urlPath);
    console.log(this.height);
  }
}
