import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input('paragraph1') paragraph1!: string;
  @Input('paragraph2') paragraph2!: string;
  heading: string = 'learning string interpolation {{}}';
  body: string = 'this the body to use for practise';

  birthday: string = 'December thursday 2022';
  image: string =
    'https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg';

  onClick() {
    alert('button clicked');
  }

  doSomething() {
    alert('jambo annan');
  }
  name = 'perez';
  popName(animal: string) {
    alert(animal);
  }
}
