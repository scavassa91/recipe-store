import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") name: ElementRef;
  @ViewChild("amountInput") amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(event) {
    const ingName = this.name.nativeElement.value;
    const ingAmout = this.amount.nativeElement.value;
    event.preventDefault();
    
    //this.newIngredient.emit(new Ingredient(ingName, ingAmout));
    this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmout));
  }

}
