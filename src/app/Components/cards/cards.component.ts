import { Component } from '@angular/core';
import { Card } from 'src/app/Models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
   cardDate:Card[];
   constructor()
   {
       this.cardDate=
       [
        {imgURL:"image-deep-earth.jpg",text:"deep earth"},
        {imgURL:"image-night-arcade.jpg",text:"night arcade"},
        {imgURL:"image-soccer-team.jpg",text:"soccer team"},
        {imgURL:"image-grid.jpg",text:"the grid"},
        {imgURL:"image-from-above.jpg",text:"from up above vr"},
        {imgURL:"image-pocket-borealis.jpg",text:"pocket borealis"},
        {imgURL:"image-curiosity.jpg",text:"the curiosity"},
        {imgURL:"image-fisheye.jpg",text:"make it fisheye"}
      ]
   }

}
