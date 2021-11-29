import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() resultValue: EventEmitter<number> = new EventEmitter;

  public result: number = 0;

  public add(): void{
    this.result += 1;
  }

  public sous(): void{
    this.result -= 1;
  }

  public sendResult(){
    console.log(this.result);
    this.resultValue.emit(this.result);
  }

  constructor() { }

  ngOnInit() {
  }

}
