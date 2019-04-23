import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-keynotes',
  templateUrl: './keynotes.component.html',
  styleUrls: ['./keynotes.component.sass']
})
export class KeynotesComponent implements OnInit {
  public deploypath = environment.deploypath;
  constructor() {}

  ngOnInit() {}
}
