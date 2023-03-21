import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { sample_foods } from 'src/data';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Foods[]{
    return sample_foods;
  }
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(foods=>foods.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getFoodById(foodId:string):Foods{
    return this.getAll().find(foods=> String(foods.id) == foodId) ?? new Foods();
  }
}
