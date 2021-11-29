import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public val: string;

  @ViewChild('valeur') public el: ElementRef<HTMLInputElement>;


  public change(){
    console.log(this.el.nativeElement.value)
    this.val = this.el.nativeElement.value;
  }


  constructor() { }

  ngOnInit() {

 
  }

}
