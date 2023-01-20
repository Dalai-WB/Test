import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styles: [],
})
export class RightComponent {
  @Input() str: string = '';
}
