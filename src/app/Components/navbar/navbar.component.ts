import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   flag : boolean = false;

   tagger(){
     this.flag=!this.flag;
   }
   changeFlag(close:boolean){
       this.flag=close; 
   }
}
