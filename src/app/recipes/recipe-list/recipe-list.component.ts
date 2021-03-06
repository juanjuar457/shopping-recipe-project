import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 public recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test',
    'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal' +
    '_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis'),
    new Recipe('A test recipe', 'this is a test',
    'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal' +
    '_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
