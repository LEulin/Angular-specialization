import { Component, OnInit } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public info: Info;
  public name: string;
  public enrolled: boolean;
  public gender: string;
  public check: string;
  public message: string;
  public dec : Info[];


  constructor() { 
    this.info = new Info();
  }

  ngOnInit() {
  }

  submitinfo() {
    this.info = {
      name: this.name,
      gender: this.gender,
      enrolled: this.enrolled
    }
  }

}
