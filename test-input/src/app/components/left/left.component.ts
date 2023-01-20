import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styles: [],
})
export class LeftComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  str: string = '';

  onClick(val: string) {
    this.str = val;
    this.newItemEvent.emit(val);
  }
}
