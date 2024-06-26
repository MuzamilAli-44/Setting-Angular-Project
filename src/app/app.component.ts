import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive} from '@angular/router';

import { Test01Component } from './component/test01/test01.component';
import { Test02Component } from './component/test02/test02.component';
import { Test03Component } from './component/test03/test03.component';
import { ToogleButtonComponent } from "./component/toogle-button/toogle-button.component";
import { SecondToogleButtonComponent } from './component/second-toogle-button/second-toogle-button.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, Test01Component, Test02Component, Test03Component, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ToogleButtonComponent,SecondToogleButtonComponent]
})

export class AppComponent {
  title = 'Angular_setup_project';
  sliderValue: boolean = false;
  
  changeState(value :boolean ){
    this.sliderValue = !value;
  }
}

