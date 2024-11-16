import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent {}