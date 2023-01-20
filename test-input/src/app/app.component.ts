import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  str: string = '';
  title = 'test-input';

  addItem(event: any) {
    this.str = event;
  }
}
