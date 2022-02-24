import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UserInputApp';
  name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  constructor(){ }
  submitDetails = () => {
  alert(this.name.value);
}
}

