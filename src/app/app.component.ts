import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive} from '@angular/router';

import { Test01Component } from './component/test01/test01.component';
import { Test02Component } from './component/test02/test02.component';
import { Test03Component } from './component/test03/test03.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Test01Component, Test02Component, Test03Component,CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular_setup_project';
}

