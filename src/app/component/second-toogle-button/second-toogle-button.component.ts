import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-second-toogle-button',
  standalone: true,
  imports: [],
  templateUrl: './second-toogle-button.component.html',
  styleUrl: './second-toogle-button.component.scss'
})
export class SecondToogleButtonComponent {
  
  @Input() slider :boolean = false;

  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  toogle()  {
    //this.slider = !this.slider;
    this.valueChange.emit(this.slider);
  }

}

