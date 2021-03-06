import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';

//tava DISHES


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  //@Input()
  //dish: Dish;
  

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit() {
      const id = +this.route.snapshot.params['id'];
      this.dish = this.dishservice.getDish(id);
    }
  
    goBack(): void {
      this.location.back();
    }
  

}
