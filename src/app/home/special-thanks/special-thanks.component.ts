import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-special-thanks',
  templateUrl: './special-thanks.component.html',
  styleUrls: ['./special-thanks.component.sass']
})
export class SpecialThanksComponent implements OnInit {
  public deploypath = environment.deploypath;
  constructor() {}

  ngOnInit() {}
}
