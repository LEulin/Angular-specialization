import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() info: Info;
  @Output() messageEvent = new EventEmitter()
  @Output() declinedEvent = new EventEmitter()
  public message: string;
  public decList = [];

  datas: any[]=[];

  constructor() { }

  ngOnInit() {
  }

  approved() {
    this.message = " The application is approved!"
    this.messageEvent.emit(this.message);
    this.datas.push(this.info)

  }
  declined(){
    this.message = " The application is declined!"
    this.messageEvent.emit(this.message);
    this.decList.push(this.info)
    this.declinedEvent.emit(this.decList);
    console.log(this.info)
    console.log(this.decList)
  }

  


}
