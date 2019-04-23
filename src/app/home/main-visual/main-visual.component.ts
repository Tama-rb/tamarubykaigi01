import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-visual',
  templateUrl: './main-visual.component.html',
  styleUrls: ['./main-visual.component.sass']
})
export class MainVisualComponent implements OnInit {
  public deploypath = environment.deploypath;
  constructor() {}

  ngOnInit() {}
}
