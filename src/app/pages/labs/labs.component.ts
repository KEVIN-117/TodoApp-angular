import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  name = 'Angular';
  image = 'https://res.cloudinary.com/dhq9acwqr/image/upload/v1708355641/movile-bg/wvxd9biajlrj7gcoq3ir_kkuaby.jpg'
  width = 250
  height = 500



  subMitFunction() {
    alert('You clicked the button!')
  }

  handleChange(event: Event) {
    console.log(event.target)
  }
  colorControl = new FormControl()
}
