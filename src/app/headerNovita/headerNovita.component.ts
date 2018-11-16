import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headerNovita',
  templateUrl: './headerNovita.component.html',
  styleUrls: ['./headerNovita.component.css']
})
export class HeaderNovitaComponent implements OnInit {
 // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature:string){
  //  this.featureSelected.emit(feature);
  // }

  constructor() { }

  ngOnInit() {
  }

}
