import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  title: string = 'About page!';
}
