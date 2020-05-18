import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})

export class OutputDecoratorComponent implements OnInit {

  @Input() myinputMsg:string;
  @Output() myoutputMsg:EventEmitter<string> = new EventEmitter();
  outputmessage:string = "This is my child component Data"; 

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.myinputMsg);
  }

  sendvalues() {
    this.myoutputMsg.emit(this.outputmessage);
  }

}
