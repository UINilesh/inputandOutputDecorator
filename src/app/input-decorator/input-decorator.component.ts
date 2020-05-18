import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent implements OnInit {

  myInputMessage: string = "I am parent component data";

  showdata:string;
  constructor() { }

  ngOnInit(): void {
  }

  GetChildData(data){
    console.log(data);
    this.showdata=data;
  }
}
