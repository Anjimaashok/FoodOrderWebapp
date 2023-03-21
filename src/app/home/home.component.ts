import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:Foods[]=[];
  constructor(private fs:FoodService,private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods=this.fs.getAllFoodsBySearchTerm(params.searchTerm);
      else
      this.foods=fs.getAll()
    } )
  }
  

  ngOnInit(): void {
    
    
    
  }

}
