import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Output() closeEvent:EventEmitter<boolean>;
  constructor(){
    this.closeEvent = new EventEmitter<boolean>(true);
  }
  taggle(){
    this.closeEvent.emit(false);
  }
}
