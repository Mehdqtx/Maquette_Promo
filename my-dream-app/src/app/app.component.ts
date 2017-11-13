import { Component } from '@angular/core';

@Component({
  selector: 'bs-app',
  template: `<h1>{{title}}</h1>`
})
export class AppComponent {
  title : string = 'Salut !!';
}
