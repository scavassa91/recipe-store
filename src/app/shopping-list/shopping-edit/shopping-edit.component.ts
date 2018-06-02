import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") name: ElementRef;
  @ViewChild("amountInput") amount: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddItem(event) {
    const ingName = this.name.nativeElement.value;
    const ingAmout = this.amount.nativeElement.value;
    event.preventDefault();
    
    this.newIngredient.emit(new Ingredient(ingName, ingAmout));
  }

}
