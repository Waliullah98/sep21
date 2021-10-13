import { Input } from '@angular/core';

import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})
export class CardDataComponent implements OnInit {
  @Input('var1') var1:any;
  @Input('wali')  wali:any;
  @Input("text") text:any;

obj: any=[
{

}
]


  constructor() { }

  ngOnInit(): void {
  }

}
