import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.sass']
})
export class SponsorsComponent implements OnInit {
  public deploypath = environment.deploypath;
  constructor() {}

  ngOnInit() {}
}
