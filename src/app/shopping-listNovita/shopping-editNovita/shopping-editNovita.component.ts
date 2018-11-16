import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'D:/SEMESTER 3/PEMROGRAMAN WEB/belajar_angular/project-keempat/src/app/sharedNovita/ingredientNovita.model';
import { ShoppingListNovitaService } from '../shopping-listNovita.service';

@Component({
  selector: 'app-shopping-editNovita',
  templateUrl: './shopping-editNovita.component.html',
  styleUrls: ['./shopping-editNovita.component.css']
})
export class ShoppingEditNovitaComponent implements OnInit {



  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  //@Output() ingredientAdded= new EventEmitter<Ingredient>();

  constructor(private slsService:ShoppingListNovitaService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAmount);
    this.slsService.addIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
  }
}
