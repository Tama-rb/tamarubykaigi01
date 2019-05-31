import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-become-a-speaker',
  templateUrl: './become-a-speaker.component.html',
  styleUrls: ['./become-a-speaker.component.sass']
})
export class BecomeASpeakerComponent implements OnInit {
  public deploypath = environment.deploypath;
  constructor() {}

  ngOnInit() {}
}
